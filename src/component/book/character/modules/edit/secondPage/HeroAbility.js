import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../../styles/Styles";

export default function HeroAbility(props) {

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Zdolności
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container direction={"column"}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={6}>

                                        <HeroSkillsLetters><b>Zdolność</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <HeroSkillsLetters><b>Opis</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                </Grid>
                                {props.abilities.map((ability, key) => (

                                        <Grid container direction={"row"} spacing={2} key={key} style={{paddingBottom:"26px"}}>
                                            <Grid item xs={6} >

                                                <HeroTextField value={ability.name}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                            </Grid>
                                            <Grid item xs={6} >
                                                <HeroTextField value={ability.description}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               multiline
                                                />
                                            </Grid>
                                        </Grid>


                                ))}

                            </Grid>

                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}