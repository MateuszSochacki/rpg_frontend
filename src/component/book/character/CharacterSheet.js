import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroInfo from "./modules/HeroInfo";
import HeroDescription from "./modules/HeroDescription";

import HeroTraits from "./modules/HeroTraits";
import HeroArmor from "./modules/HeroArmor";
import HeroWeapon from "./modules/HeroWeapon";
import HeroGameInfo from "./modules/HeroGameInfo";
import HeroExperiencePoints from "./modules/HeroExperiencePoints";
import HeroMovement from "./modules/HeroMovement";
import HeroArmorPoints from "./modules/HeroArmorPoints";


export default function CharacterSheet() {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <HeroInfo/>
                    <br/>
                    <HeroDescription/>
                    <br/>
                    <HeroTraits/>
                    <br/>
                    <HeroWeapon/>
                    <br/>
                    <HeroArmor/>

                </Grid>

                {/*<Grid item xs={1}/>*/}
                <Grid item xs={6} >

                    <HeroGameInfo/>
                    <br/>
                    <HeroExperiencePoints/>
                    <br/>
                    <HeroMovement/>
                    <br/>
                    <HeroArmorPoints/>
                </Grid>
            </Grid>

        </>
    )

}