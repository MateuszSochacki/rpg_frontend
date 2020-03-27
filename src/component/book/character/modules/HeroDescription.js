import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";


export default function HeroDescription() {

    return(
        <Paper elevation={8}>
        <HeroPanel expanded={true}>
            <HeroPanelSummary>
                <HeroText>
                opis bohatera
                </HeroText>
            </HeroPanelSummary>
            <HeroPanelDetails>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6} style={{borderRight:"1px solid",}}>
                                <HeroTextField id="age" label="Wiek: " value={"22"} />
                                <HeroTextField id="eyeColor" label="Kolor oczu:" value={"Niebieskie"} />
                                <HeroTextField id="hairColor" label="Kolor włosów:" value={"Białe"} />
                                <HeroTextField id="starSign" label="Znak gwiezdny:" value={"łuk"} />

                            </Grid>
                            <Grid item xs={6}>
                                <HeroTextField id="sex" label="Płeć: " value={"Kobieta"} />
                                <HeroTextField id="weight" label="Waga: " value={"46Kg"} />
                                <HeroTextField id="height" label="Wzrost: " value={"167cm"} />
                                <HeroTextField id="family" label="Rodzeństwo: " value={"Brak"} />
                            </Grid>
                            <HeroTextField id="placeOfBirth" label="Miejsce urodzenia: " value={"Nieznana wieś"} />
                            <HeroTextField id="distinguishMark" label="Znaki szczególne: " value={"Blada cera"} />
                        </Grid>
                    </Grid>
                </Grid>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )
}