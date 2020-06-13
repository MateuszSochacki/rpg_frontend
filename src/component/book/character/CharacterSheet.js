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
import APIAuth from "../../API/APIAuth";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
export default function CharacterSheet() {
    const [charSheet, setCharSheet] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    const handleUpdate = () => {
        let didCancel = false;
        fetchSheets(didCancel);

    };

    async function fetchSheets(didCancel) {

        await API.get("user/sheet/owner", {
            headers: {
                'Authorization': await sessionStorage.jwt
            }
        }).then(async (response) => {

            if (!didCancel) {
                const sheets = response.data;
                setCharSheet(sheets.characterSheetsDtos);

                setIsLoading(false);
            }
        }).catch(error => {
            console.log(error)
        });

    }

    useEffect(() => {

        let didCancel = false;


        fetchSheets(didCancel);
        return () => {
            didCancel = true;
        };

    }, [isLoading]);
    return (
        <>
            <Paper className={classes.root}>
                {isLoading ? <CircularProgress/> :
                    <Grid container>
                        <Grid item xs={12}>

                            {charSheet.map((character, key) => (
                                <Panel key={key}>
                                    <PanelSummary key={key}>
                                        <Typography variant="h5" component="h5" align={"left"}>
                                            {character.hero.name}
                                        </Typography>
                                    </PanelSummary>
                                    <ExpansionPanelDetails style={{padding: "0 0 24px"}} key={key}>
                                        <PageSelector sheet={character} update={handleUpdate}/>
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