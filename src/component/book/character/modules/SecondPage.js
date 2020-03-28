import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroSkills from "./secondPage/HeroSkills";
import HeroAbility from "./secondPage/HeroAbility";
import HeroEquipment from "./secondPage/HeroEquipment";
import HeroMoney from "./secondPage/HeroMoney";






export default function SecondPage() {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <HeroSkills/>

                </Grid>

                <Grid item xs={6} >

                    <HeroAbility/>
                    <br/>
                    <HeroEquipment/>
                    <br/>
                    <HeroMoney/>

                </Grid>
            </Grid>

        </>
    )

}