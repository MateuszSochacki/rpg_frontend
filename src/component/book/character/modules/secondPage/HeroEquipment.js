import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../styles/Styles";

export default function HeroEquipment() {

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
                                <Grid container direction={"row"}>
                                    <Grid item xs={4}>

                                        <HeroSkillsLetters><b>Przedmiot</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroSkillsLetters><b>Obc.</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <HeroSkillsLetters><b>Opis</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}