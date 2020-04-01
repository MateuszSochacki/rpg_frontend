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

export default function HeroEditExperiencePoints(props) {

    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            punkty doświadczenia
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={3} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="currentExp" label="Obecne:" value={props.exp.current} />

                                </Grid>
                                <Grid item xs={9} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="sumExp" label="Razem:" value={props.exp.sum} />
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}