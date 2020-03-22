import React, {useEffect, useState} from "react";
import {Panel,PanelSummary} from "../../styles/expansionPanel/Panel";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import ApiForBook from "../../ApiForBook";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

export default function Skills() {

    const classes = SearchInputStyle();
    const [allSkills, setAllSkills] = useState([]);
    const [currentSkills, setCurrentSkills] = useState([]);
    const [searching, setSearching] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allSkills;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentSkills(filteredList);

    };

    useEffect(() => {

        let didCancel = false;


        async function fetchSkills() {

            await ApiForBook.get("skill/all").then(async (response) => {

                if (!didCancel) {
                    const skill = response.data;
                    setAllSkills(skill.skillDtos);

                    setCurrentSkills(skill.skillDtos);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }


        fetchSkills();
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
                    {currentSkills.map((skill,key)=>(


                        <Panel key={key} className={classes.expansionPanel}>
                            <PanelSummary key={key} className={classes.expansionPanelContent}>
                                <Typography variant="h5" component="h5" align={"left"}>
                                    {skill.name}
                                </Typography>
                            </PanelSummary>
                            <ExpansionPanelDetails key={key}>

                                <Grid container direction="row" justify="flex-start">
                                    <Grid item xs={12}>
                                        <Typography align={"left"}>
                                            <b>Typ:</b> {skill.type}
                                        </Typography>
                                        <Typography align={"left"}>
                                            <b>Cecha:</b> {skill.trait}
                                        </Typography>
                                        <Typography align={"left"}>
                                            <b>Opis:</b> {skill.description}
                                        </Typography>

                                            <Typography align={"left"}>
                                                <b>Zdolności pokrewne:</b> {skill.relAbility}
                                            </Typography>

                                    </Grid>
                                </Grid>
                            </ExpansionPanelDetails>


                        </Panel>
                    ))}</>
            }
        </Paper>
    )
}