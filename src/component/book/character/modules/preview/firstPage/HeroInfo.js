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

export default function HeroInfo(props) {

    return(

        <Paper elevation={8}>

            <HeroPanel expanded={true} >
            <HeroPanelSummary>
                <HeroText align={"center"} >
                    Bohater
                </HeroText>
            </HeroPanelSummary>
            <HeroPanelDetails>
                <>
                    <Grid container>
                        <Grid item xs={12}>
                            <HeroTextField id="heroName" label="Imię:" value={props.info.name} />
                            <HeroTextField id="race" label="Rasa:" value={props.info.race} />
                            <HeroTextField id="currentProfession" label="Obecna profesja:" value={props.info.currentProfession} />
                            <HeroTextField id="previousProfession" label="Poprzednia profesja:" value={props.info.previousProfession} />
                        </Grid>
                    </Grid>


                </>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )

}