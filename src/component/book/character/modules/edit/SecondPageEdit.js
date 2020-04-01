import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroSkills from "./../preview/secondPage/HeroSkills";
import HeroAbility from "./../preview/secondPage/HeroAbility";
import HeroEquipment from "./../preview/secondPage/HeroEquipment";
import HeroMoney from "./../preview/secondPage/HeroMoney";


export default function SecondPageEdit(props) {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <HeroSkills skills={props.character.skill}/>

                </Grid>

                <Grid item xs={6}>

                    <HeroAbility abilities={props.character.ability}/>
                    <br/>
                    <HeroEquipment equipment={props.character.equipment}/>
                    <br/>
                    <HeroMoney money={props.character.money}/>

                </Grid>
            </Grid>

        </>
    )

}