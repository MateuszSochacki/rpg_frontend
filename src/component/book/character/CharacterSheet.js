import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import API from "../../API/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PageSelector from "./modules/PageSelector";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
export default function CharacterSheet() {
    const [charSheet, setCharSheet] = useState(0);
    const [character, setCharacter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const classes=useStyles();



    useEffect(() => {

        let didCancel = false;

        async function fetchSheets() {

            await API.get("user/sheet/owner").then(async (response) => {

                if (!didCancel) {
                    const sheets = response.data;
                    setCharSheet(sheets.characterSheetsDtos);
                    setCharacter(sheets.characterSheetsDtos);

                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        };


        fetchSheets();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);
    return (
        <>
            <Paper className={classes.root}>
                {isLoading ? <CircularProgress/> :
                    <Grid container >
                        <Grid item xs={12}>

                            {charSheet.map((character, key) => (
                                <Panel key={key} >
                                    <PanelSummary key={key}>
                                        <Typography variant="h5" component="h5" align={"left"}>
                                            {character.hero.name}
                                        </Typography>
                                    </PanelSummary>
                                    <ExpansionPanelDetails style={{padding:"0 0 24px"}} key={key}>
                                            <PageSelector sheet={character} character={character}/>
                                    </ExpansionPanelDetails>

                                </Panel>
                            ))}
                        </Grid>
                    </Grid>
                }
            </Paper>

        </>
    )

}