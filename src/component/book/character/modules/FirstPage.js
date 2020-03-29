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


export default function FirstPage(props) {

    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Grid container spacing={4}>

                        <Grid item xs={6}>
                            <HeroInfo info={props.sheet.hero}/>
                            <br/>
                            <HeroDescription description={props.sheet.description}/>
                            <br/>
                            <HeroTraits traits={props.sheet.traits} profession={props.sheet.hero.currentProfession}/>
                            <br/>
                            <HeroWeapon weapons={props.sheet.weapon}/>
                            <br/>
                            <HeroArmor armors={props.sheet.armor}/>

                        </Grid>

                        {/*<Grid item xs={1}/>*/}
                        <Grid item xs={6}>

                            <HeroGameInfo gameInfo={props.sheet.player}/>
                            <br/>
                            <HeroExperiencePoints exp={props.sheet.experiencePoints}/>
                            <br/>
                            <HeroMovement move={props.sheet.movement}/>
                            <br/>
                            <HeroArmorPoints ap={props.sheet.armorPoints}/>
                            <br/>
                            <HeroActionSheet/>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

        </>
    )

}