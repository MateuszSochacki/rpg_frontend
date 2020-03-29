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

export default function HeroGameInfo(props) {

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
                                    <HeroTextField id="plaeyrName" label="Imię:" value={props.gameInfo.name} style={{borderBottom:"1px solid",}}/>
                                    <HeroTextField id="campaign" label="Kampania:" value={props.gameInfo.campaign} />

                                </Grid>
                                <Grid item xs={6} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="gameMaster" label="Mistrz gry:" value={props.gameInfo.gameMaster} style={{borderBottom:"1px solid",}}/>
                                    <HeroTextField id="yearOfCampaign" label="Rok kampanii:" value={props.gameInfo.yearOfCampaign} />
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
            </>
    )

}