import React from "react";
import {Paper} from "@material-ui/core";
import {HeroTextField,
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";

export default function HeroSpells() {

    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <HeroTextField id="spellName" label="Nazwa czaru:"
                                           value={"Porażenie piorunem"}/>
                            <Grid container>
                                <Grid item xs={6}>
                                    <HeroTextField id="powerLevel" label="Wymagany poziom mocy:"
                                                   value={"4"}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <HeroTextField id="castTime" label="Czas rzucania:" value={"2"}/>
                                </Grid>
                                <HeroTextField id="ingredient" label="Składnik:" value={"Przewodnik"}/>
                                <HeroTextField id="description" label="Opis:" value={"Brak"}/>
                            </Grid>

                        </Grid>
                        <Grid item xs={6}>
                            {/*<HeroTextField id="spellName" label="Nazwa czaru:"*/}
                            {/*               value={"Porażenie piorunem"}/>*/}
                            {/*<Grid container>*/}
                            {/*    <Grid item xs={6}>*/}
                            {/*        <HeroTextField id="powerLevel" label="Wymagany poziom mocy:"*/}
                            {/*                       value={"4"}/>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item xs={6}>*/}
                            {/*        <HeroTextField id="castTime" label="Czas rzucania:" value={"2"}/>*/}
                            {/*    </Grid>*/}
                            {/*    <HeroTextField id="ingredient" label="Składnik:" value={"Przewodnik"}/>*/}
                            {/*    <HeroTextField id="description" label="Opis:" value={"Brak"}/>*/}
                            {/*</Grid>*/}

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </>
    )

}