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


export default function FirstPagePreview(props) {

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