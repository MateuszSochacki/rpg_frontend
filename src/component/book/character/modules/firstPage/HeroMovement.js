import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";

export default function HeroMovement() {

    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            ruch w walce
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={3} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="movement" label="Ruch/odwrót:" value={"25m"} />

                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",borderRight:"1px solid"}}>
                                    <HeroTextField id="strike" label="Szarża:" value={"34m"} />
                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="run" label="Bieg:" value={"40m"} />
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}