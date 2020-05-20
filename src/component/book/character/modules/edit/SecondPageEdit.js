import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroEditSkills from "./secondPage/HeroEditSkills";
import HeroEditAbility from "./secondPage/HeroEditAbility";
import HeroEditEquipment from "./secondPage/HeroEditEquipment";
import HeroEditMoney from "./secondPage/HeroEditMoney";



export default function SecondPageEdit(props) {

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <HeroEditSkills character={props.character}/>

                </Grid>

                <Grid item xs={6}>

                    <HeroEditAbility character={props.character}/>
                    <br/>
                    <HeroEditEquipment character={props.character}/>
                    <br/>
                    <HeroEditMoney character={props.character}/>

                </Grid>
            </Grid>

        </>
    )

}