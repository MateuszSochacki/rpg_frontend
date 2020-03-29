import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroSkills from "./secondPage/HeroSkills";
import HeroAbility from "./secondPage/HeroAbility";
import HeroEquipment from "./secondPage/HeroEquipment";
import HeroMoney from "./secondPage/HeroMoney";


export default function SecondPage(props) {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <HeroSkills skills={props.sheet.skill}/>

                </Grid>

                <Grid item xs={6}>

                    <HeroAbility abilities={props.sheet.ability}/>
                    <br/>
                    <HeroEquipment equipment={props.sheet.equipment}/>
                    <br/>
                    <HeroMoney money={props.sheet.money}/>

                </Grid>
            </Grid>

        </>
    )

}