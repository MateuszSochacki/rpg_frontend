import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Paper from "@material-ui/core/Paper";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import API from "../../API";
import TableForTraits from "../../util/TableForTraits";



export default function Beasts() {

    const classes = SearchInputStyle();
    const [allBeasts, setAllBeasts] = useState([]);
    const [currentBeasts, setCurrentBeasts] = useState([]);
    const [searching, setSearching] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allBeasts;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentBeasts(filteredList);

    };

    useEffect(() => {

        let didCancel = false;


        async function fetchBeasts() {

            await API.get("beast/all").then(async (response) => {

                if (!didCancel) {
                    const beasts = response.data;
                    setAllBeasts(beasts.beastDtos);

                    setCurrentBeasts(beasts.beastDtos);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }


        fetchBeasts();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);

    return (
        <Paper className={classes.root}>
            <Grid container alignItems={"center"} justify={"flex-start"}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={3}>
                    <Grid container>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                onChange={filterList}
                                value={searching}
                                placeholder="Wyszukaj.."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            {isLoading === true ?
                <CircularProgress/> :
                <>
                    {currentBeasts.map((beast, key) => (


                        <Panel key={key} className={classes.expansionPanel} TransitionProps={{unmountOnExit: true}}>
                            <PanelSummary key={key} className={classes.expansionPanelContent}>
                                <Typography variant="h5" component="h5" align={"left"}>
                                    {beast.name}
                                </Typography>
                            </PanelSummary>
                            <ExpansionPanelDetails key={key}>

                                <Grid container direction="row" justify="flex-start">
                                    <Grid item xs={7}>

                                        <Typography align={"left"}>
                                            <b>Opis:</b> {beast.description}
                                        </Typography>

                                        {beast.skillList !== null ?

                                            <Typography align={"left"}>
                                                <b>Umiejętności:</b> {beast.skillList.join(", ")}.
                                            </Typography>
                                            : <Typography align={"left"}>
                                                <b>Umiejętności:</b> Brak
                                            </Typography>
                                        }

                                        {beast.abilityList !== null ?

                                            <Typography align={"left"}>
                                                <b>Zdolności: </b>
                                                {beast.abilityList.join(", ")}.


                                            </Typography>
                                            : <Typography align={"left"}>
                                                <b>Zdolności:</b> Brak
                                            </Typography>
                                        }

                                        {beast.specialRules !== null ?

                                            <>
                                                <Typography align={"left"}>
                                                    <b>Zasady specialne:</b>
                                                </Typography>

                                                {beast.specialRules.map((rule, keys) => {
                                                    return (
                                                        <Typography key={keys} align={"left"}>
                                                            <i>{rule.name}</i>: {rule.description}

                                                        </Typography>

                                                    )

                                                })}
                                            </>
                                            : <Typography align={"left"}>
                                                <b>Zasady specialne:</b> Brak
                                            </Typography>
                                        }
                                        {beast.armorList !== null ?

                                            <Typography align={"left"}>
                                                <b>Zbroja:</b> {beast.armorList.join(", ")}.

                                            })}
                                            </Typography>
                                            : <Typography align={"left"}>
                                                <b>Zbroja:</b> Brak
                                            </Typography>
                                        }
                                        {beast.armorPoints !== null ?

                                            <Typography align={"left"}>
                                                <b>Punkty zbroi:</b>
                                                Głowa: {beast.armorPoints.head},
                                                Ręce: {beast.armorPoints.hands},
                                                Korpus: {beast.armorPoints.body},
                                                Nogi: {beast.armorPoints.legs}.
                                            </Typography>
                                            : <Typography align={"left"}>
                                                <b>Zbroja:</b> Brak
                                            </Typography>
                                        }

                                        {beast.weapon !== null ?

                                            <Typography align={"left"}>
                                                <b>Broń:</b> {beast.weapon.join(", ")}.
                                            </Typography>
                                            : <Typography align={"left"}>
                                                <b>Broń:</b> Brak
                                            </Typography>
                                        }


                                        <Typography align={"left"} key={key}>
                                            <b>Trudność:</b> {beast.difficulty}
                                        </Typography>


                                    </Grid>
                                    <Grid item xs={5}>
                                        {beast.img !==null?
                                            <>
                                                <img src={beast.img} width={"50%"}  alt={`Zdjęcie ${beast.name}`}/>
                                            </>
                                            :null}
                                        {beast.mainTraits !== null ?
                                            <>
                                                <TableForTraits mainTraits={beast.mainTraits} secondaryTraits={beast.secondaryTraits}/>
                                            </> : null}


                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>


                        </Panel>
                    ))}</>
            }
        </Paper>
    )
}