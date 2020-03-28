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

export default function HeroGameInfo() {

    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            gracz
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={6} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="name" label="Imię:" value={"Mateusz"} style={{borderBottom:"1px solid",}}/>
                                    <HeroTextField id="campaign" label="Kampania:" value={"Wrzesniowa"} />

                                </Grid>
                                <Grid item xs={6} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="gameMaster" label="Mistrz gry:" value={"Sochacki"} style={{borderBottom:"1px solid",}}/>
                                    <HeroTextField id="yearOfCampaign" label="Rok kampanii:" value={"2020"} />
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
            </>
    )

}