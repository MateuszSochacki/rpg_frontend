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

export default function HeroMoney(props) {

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Pieniądze
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container direction={"column"}>
                               <Grid item xs={12}>
                                   <HeroTextField style={{borderBottom:"1px solid"}} inputProps={{min: 0, style: {textAlign: "center"}}} id="gold" label="Złote korony (zk):" value={props.money.gold} />
                                   <HeroTextField style={{borderBottom:"1px solid"}} inputProps={{min: 0, style: {textAlign: "center"}}} id="silver" label="Srebrne szylingi (s)" value={props.money.silver} />
                                   <HeroTextField id="copper" inputProps={{min: 0, style: {textAlign: "center"}}} label="Mosiężne pensy (p):" value={props.money.copper} />


                               </Grid>
                            </Grid>



                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}