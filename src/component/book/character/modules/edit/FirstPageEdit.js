import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroActionSheet from "./../preview/firstPage/HeroActionSheet";
import HeroEditInfo from "./firstPage/HeroEditInfo";
import HeroEditDescription from "./firstPage/HeroEditDescription";
import HeroEditTraits from "./firstPage/HeroEditTraits";
import HeroEditWeapon from "./firstPage/HeroEditWeapon";
import HeroEditArmor from "./firstPage/HeroEditArmor";
import HeroEditGameInfo from "./firstPage/HeroEditGameInfo";
import HeroEditExperiencePoints from "./firstPage/HeroEditExperiencePoints";
import HeroEditMovement from "./firstPage/HeroEditMovement";
import HeroEditArmorPoints from "./firstPage/HeroEditArmorPoints";


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
                            <HeroEditWeapon character={props.character} update={props.update} />
                            <br/>
                            <HeroEditArmor character={props.character} update={props.update}/>

                        </Grid>

                        {/*<Grid item xs={1}/>*/}
                        <Grid item xs={6}>

                            <HeroEditGameInfo character={props.character} update={props.update}/>
                            <br/>
                            <HeroEditExperiencePoints character={props.character} update={props.update}/>
                            <br/>
                            <HeroEditMovement character={props.character} update={props.update}/>
                            <br/>
                            <HeroEditArmorPoints character={props.character} update={props.update}/>
                            <br/>
                            <HeroActionSheet/>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

        </>
    )

}