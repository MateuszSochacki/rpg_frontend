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

export default function HeroInfo() {

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
                            <HeroTextField id="name" label="Imię:" value={"Bjorn"} />
                            <HeroTextField id="race" label="Rasa:" value={"Elf"} />
                            <HeroTextField id="currentProfession" label="Obecna profesja:" value={"Cyrulik"} />
                            <HeroTextField id="previousProfession" label="Poprzednia profesja:" value={"Ciura obozowa"} />
                        </Grid>
                    </Grid>


                </>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )

}