import React from "react";

import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../styles/Styles";

export default function HeroMutation() {

    return (
        <>

            <Grid container>
                <Grid item xs={12}>

                    <Grid container >
                        <Grid item xs={12}>

                            <Grid container>
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

                        </Grid>

                    </Grid>
                </Grid>

            </Grid>


        </>
    )

}