import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../styles/Styles";

export default function HeroMoney() {

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            wyposażenie
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container direction={"column"}>
                               <Grid item xs={12}>
                                   <HeroTextField style={{borderBottom:"1px solid"}} id="gold" label="Złote korony (zk):" value={"50"} />
                                   <HeroTextField style={{borderBottom:"1px solid"}} id="silver" label="Srebrne szylingi (s)" value={"20"} />
                                   <HeroTextField id="copper" label="Mosiężne pensy (p):" value={"14"} />


                               </Grid>
                            </Grid>



                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}