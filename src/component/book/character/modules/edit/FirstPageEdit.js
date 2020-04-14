import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroInfo from "./../preview/firstPage/HeroInfo";
import HeroDescription from "./../preview/firstPage/HeroDescription";
import HeroTraits from "./../preview/firstPage/HeroTraits";
import HeroWeapon from "./../preview/firstPage/HeroWeapon";
import HeroArmor from "./../preview/firstPage/HeroArmor";
import HeroGameInfo from "./../preview/firstPage/HeroGameInfo";
import HeroExperiencePoints from "./../preview/firstPage/HeroExperiencePoints";
import HeroMovement from "./../preview/firstPage/HeroMovement";
import HeroArmorPoints from "./../preview/firstPage/HeroArmorPoints";
import HeroActionSheet from "./../preview/firstPage/HeroActionSheet";
import HeroEditInfo from "./firstPage/HeroEditInfo";
import HeroEditDescription from "./firstPage/HeroEditDescription";
import HeroEditTraits from "./firstPage/HeroEditTraits";


export default function FirstPageEdit(props) {

    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Grid container spacing={4}>

                        <Grid item xs={6}>
                            <HeroEditInfo  character={props.character} update={props.update}/>
                            <br/>
                            <HeroEditDescription character={props.character} update={props.update}/>
                            <br/>
                            <HeroEditTraits character={props.character} update={props.update}/>
                            <br/>
                            <HeroWeapon weapons={props.character.weapon}/>
                            <br/>
                            <HeroArmor armors={props.character.armor}/>

                        </Grid>

                        {/*<Grid item xs={1}/>*/}
                        <Grid item xs={6}>

                            <HeroGameInfo gameInfo={props.character.player}/>
                            <br/>
                            <HeroExperiencePoints exp={props.character.experiencePoints}/>
                            <br/>
                            <HeroMovement move={props.character.movement}/>
                            <br/>
                            <HeroArmorPoints ap={props.character.armorPoints}/>
                            <br/>
                            <HeroActionSheet/>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

        </>
    )

}