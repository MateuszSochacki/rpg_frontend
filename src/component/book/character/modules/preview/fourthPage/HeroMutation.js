import React from "react";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../../styles/Styles";
import {HeroTextField} from "../../../../../styles/expansionPanel/Panel";

export default function HeroMutation(props) {

    return (
        <>

            <Grid container>
                <Grid item xs={12}>

                    <Grid container >
                        <Grid item xs={12}>

                            <Grid container style={{borderBottom:"1px solid"}}>
                                <Grid item xs={2}>
                                    <HeroSkillsLetters><b>Punkty strachu</b></HeroSkillsLetters>
                                </Grid>
                                <Grid item xs={3}>
                                    <HeroSkillsLetters><b>Nazwa Mutacji</b></HeroSkillsLetters>

                                </Grid>
                                <Grid item xs={2}>
                                    <HeroSkillsLetters><b>Lokacja</b></HeroSkillsLetters>

                                </Grid>
                                <Grid item xs={5}>
                                    <HeroSkillsLetters><b>Opis</b></HeroSkillsLetters>
                                </Grid>


                            </Grid>
                            {props.mutations.map((mutation,key)=>(
                                <Grid container key={key} style={{borderBottom:"1px solid"}}>
                                    <Grid item xs={2}>
                                        <HeroTextField value={mutation.fearPoints}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <HeroTextField value={mutation.name}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroTextField value={mutation.location}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <HeroTextField value={mutation.description}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}
                                                       multiline
                                        />
                                    </Grid>



                                </Grid>
                            ))}

                        </Grid>

                    </Grid>
                </Grid>

            </Grid>


        </>
    )

}