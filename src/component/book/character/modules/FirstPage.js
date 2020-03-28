import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroInfo from "./firstPage/HeroInfo";
import HeroDescription from "./firstPage/HeroDescription";
import HeroTraits from "./firstPage/HeroTraits";
import HeroWeapon from "./firstPage/HeroWeapon";
import HeroArmor from "./firstPage/HeroArmor";
import HeroGameInfo from "./firstPage/HeroGameInfo";
import HeroExperiencePoints from "./firstPage/HeroExperiencePoints";
import HeroMovement from "./firstPage/HeroMovement";
import HeroArmorPoints from "./firstPage/HeroArmorPoints";
import HeroActionSheet from "./firstPage/HeroActionSheet";





export default function FirstPage() {

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
                    <br/>
                    <HeroActionSheet/>
                </Grid>
            </Grid>

        </>
    )

}