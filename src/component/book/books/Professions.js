import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TableForTraits from "../../util/TableForTraits";
import Paper from "@material-ui/core/Paper";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import API from "../../API";

export default function Professions() {
    const classes = SearchInputStyle();

    const [allProf, setAllProf] = useState([]);
    const [currentProf, setCurrentProf] = useState([]);
    const [searching, setSearching] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allProf;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentProf(filteredList);

    };

    useEffect(() => {

        let didCancel = false;


        async function fetchProfs() {

            await API.get("profession/all").then(async (response) => {

                if (!didCancel) {
                    const prof = response.data;
                    setAllProf(prof.professionDto);

                    setCurrentProf(prof.professionDto);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }
        fetchProfs();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);

    return(
        <>
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
                        {currentProf.map((prof, key) => (


                            <Panel key={key} className={classes.expansionPanel} TransitionProps={{unmountOnExit: true}}>
                                <PanelSummary key={key} className={classes.expansionPanelContent}>
                                    <Typography variant="h5" component="h5" align={"left"}>
                                        {prof.name}
                                    </Typography>
                                </PanelSummary>
                                <ExpansionPanelDetails key={key}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant={"h3"}>
                                                - {prof.name} -
                                            </Typography>
                                            <br/>
                                            <Grid container>
                                                <Grid item xs={3}>
                                                    <Typography variant={"h5"} align={"left"}>
                                                        <b>Opis:</b>
                                                    </Typography>
                                                    <Typography align={"left"}>
                                                        {prof.description}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img src={prof.img} alt={""} width={"100%"}/>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TableForTraits mainTraits={prof.mainTraits} secondaryTraits={prof.secondaryTraits}/>

                                                    <br/>
                                                    <Typography align={"left"}>
                                                        <b>Umiejętności: </b>
                                                        {prof.skillList.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Zdolności: </b>
                                                        {prof.abilityList.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Wyposażenie: </b>
                                                        {prof.equipmentList.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Profesje wstępne: </b>
                                                        {prof.inputProf.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Profesje wyjściowe: </b>
                                                        {prof.outputProf.join(", ")}.
                                                    </Typography>
                                                    <br/>

                                                </Grid>
                                            </Grid>



                                            <Typography align={"left"}>
                                                <b>Uwagi: </b> {prof.comment}
                                            </Typography>


                                        </Grid>
                                    </Grid>


                                </ExpansionPanelDetails>


                            </Panel>
                        ))}</>
                }
            </Paper>

            </>
    )
}