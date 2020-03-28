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

export default function HeroSkills() {

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            umiejętności
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container direction={"column"}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={4}>
                                        <HeroSkillsLetters> <b>Podstawowe</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={1}>
                                        <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={1}>
                                        <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                </Grid>

                                <Grid container direction={"row"}>
                                    <Grid item xs={4}>
                                        <HeroSkillsLetters> <b>Zaawansowane</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={1}>
                                        <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={1}>
                                        <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>
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