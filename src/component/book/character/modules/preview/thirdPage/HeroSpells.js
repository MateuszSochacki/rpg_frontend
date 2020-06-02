import React from "react";
import {
    HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";

export default function HeroSpells(props) {

    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={2} direction={"row"}>
                        {props.spells.map((spell, key) => (

                            <Grid item xs={6} key={key} style={{marginBottom: 12}}>
                                <Paper elevation={5}>
                                    <HeroTextField id={"spellName" + key} label="Nazwa czaru:"
                                                   value={spell.name} key={"spellName" + key}/>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <HeroTextField id={"powerLevel" + key} label="Wymagany poziom mocy:"
                                                           value={spell.magicPower}/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <HeroTextField id={"castTime" + key} label="Czas rzucania:"
                                                           value={spell.castTime}/>
                                        </Grid>
                                        <HeroTextField id={"ingredient" + key} label="Składnik:"
                                                       value={spell.ingredient}/>
                                        <HeroTextField id={"description" + key} rows={6}
                                                       multiline label="Opis:" value={spell.description}/>
                                    </Grid>
                                </Paper>
                            </Grid>

                        ))}

                    </Grid>
                </Grid>

            </Grid>


        </>
    )

}