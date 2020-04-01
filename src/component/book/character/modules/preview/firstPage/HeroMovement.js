import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";

export default function HeroMovement(props) {

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
                                    <HeroTextField id="movement" label="Ruch/odwrót:" value={props.move.move} />

                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",borderRight:"1px solid"}}>
                                    <HeroTextField id="strike" label="Szarża:" value={props.move.strike} />
                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="run" label="Bieg:" value={props.move.run} />
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}