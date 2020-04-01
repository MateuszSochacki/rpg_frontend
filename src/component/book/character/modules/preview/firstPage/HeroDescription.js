import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";


export default function HeroDescription(props) {

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
                                <HeroTextField id="age" label="Wiek: " value={props.description.age} />
                                <HeroTextField id="eyeColor" label="Kolor oczu:" value={props.description.eyeColor} />
                                <HeroTextField id="hairColor" label="Kolor włosów:" value={props.description.hairColor} />
                                <HeroTextField id="starSign" label="Znak gwiezdny:" value={props.description.starSign} />

                            </Grid>
                            <Grid item xs={6}>
                                <HeroTextField id="sex" label="Płeć: " value={props.description.sex} />
                                <HeroTextField id="weight" label="Waga: " value={props.description.weight} />
                                <HeroTextField id="height" label="Wzrost: " value={props.description.height} />
                                <HeroTextField id="family" label="Rodzeństwo: " value={props.description.family} />
                            </Grid>
                            <HeroTextField id="placeOfBirth" label="Miejsce urodzenia: " value={props.description.placeOfBirth} />
                            <HeroTextField id="distinguishMark" label="Znaki szczególne: " value={props.description.distinguishingMarks} />
                        </Grid>
                    </Grid>
                </Grid>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )
}