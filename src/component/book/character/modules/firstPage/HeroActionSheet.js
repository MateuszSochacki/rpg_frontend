import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {SmallLetters} from "../../../../styles/Styles";

const useStyles = makeStyles((theme) => ({
    smallLetters: {
        fontSize: 12
    },

}));
export default function HeroActionSheet() {
    const classes = useStyles();

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            zestawienie akcji
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={6} style={{borderRight: "1px solid"}}>

                                    <Grid container direction={"row"}>
                                        <Grid item xs={6}>
                                            <Typography className={classes.smallLetters}>Akcje podstawowe </Typography>
                                            <br/>
                                            <SmallLetters>
                                                Atak wielokrotny
                                            </SmallLetters>
                                            <SmallLetters>
                                                Odwrót
                                            </SmallLetters>
                                            <SmallLetters>
                                                Przeładowanie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Ruch
                                            </SmallLetters>
                                            <SmallLetters>
                                                Rzucenie zaklęcia
                                            </SmallLetters>
                                            <SmallLetters>
                                                Szarża
                                            </SmallLetters>
                                            <SmallLetters>
                                                Użycie przedmiotu
                                            </SmallLetters>
                                            <SmallLetters >
                                                Wstawanie/Dosiadanie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Wycelowanie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Wykorzystanie umiejętności
                                            </SmallLetters>
                                            <SmallLetters>
                                                Zwykły atak
                                            </SmallLetters>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className={classes.smallLetters}>Typ</Typography>
                                            <br/>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Rózne
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Różne
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Różne
                                            </SmallLetters>
                                            <SmallLetters>Akcja</SmallLetters>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container direction={"row"}>
                                        <Grid item xs={6}>
                                            <Typography className={classes.smallLetters}>Akcje złożone </Typography>
                                            <br/>

                                            <SmallLetters>
                                                Bieg
                                            </SmallLetters>
                                            <SmallLetters>
                                                Finta
                                            </SmallLetters>
                                            <SmallLetters>
                                                Odepchnięcie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Opóźnienie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Ostrożny atak
                                            </SmallLetters>
                                            <SmallLetters>
                                                Parowanie
                                            </SmallLetters>
                                            <SmallLetters>
                                                Pozycja obronna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Skok
                                            </SmallLetters>
                                            <SmallLetters>
                                                Szaleńczy atak
                                            </SmallLetters>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography className={classes.smallLetters}>Typ</Typography>
                                            <br/>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                            <SmallLetters>
                                                Akcja podwójna
                                            </SmallLetters>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}