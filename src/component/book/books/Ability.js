import React, {useState, useEffect} from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import API from "../../API/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import {SearchInputStyle} from './../../styles/SearchInputStyle';
import {Panel,PanelSummary} from "../../styles/expansionPanel/Panel";



export default function Ability() {
    const classes = SearchInputStyle();
    const [allAbility, setAllAbility] = useState([]);
    const [ability, setAbility] = useState([]);
    const [searching, setSearching] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allAbility;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setAbility(filteredList);

    };

    useEffect(() => {

        let didCancel = false;


        async function fetchAbility() {

            await API.get("book/ability/all").then(async (response) => {

                if (!didCancel) {
                    const abilities = response.data;
                    setAllAbility(abilities.abilities);
                    setAbility(abilities.abilities);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }


        fetchAbility();
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
                    {ability.map((ability,key)=>(


                    <Panel key={key} className={classes.expansionPanel}>
                        <PanelSummary key={key} className={classes.expansionPanelContent}>
                            <Typography variant="h5" component="h5" align={"left"}>
                                {ability.name}
                            </Typography>
                        </PanelSummary>
                        <ExpansionPanelDetails key={key}>

                            <Typography align={"left"}>
                            <b>Opis: </b>{ability.description}
                            </Typography>
                        </ExpansionPanelDetails>


                    </Panel>
                    ))}</>
            }
        </Paper>
    )
}
