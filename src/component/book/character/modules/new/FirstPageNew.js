import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroActionSheet from "./../preview/firstPage/HeroActionSheet";
import HeroNewInfo from "./firstPage/HeroNewInfo";
import HeroNewDescription from "./firstPage/HeroNewDescription";
import HeroNewTraits from "./firstPage/HeroNewTraits";
import HeroNewWeapon from "./firstPage/HeroNewWeapon";
import HeroNewGameInfo from "./firstPage/HeroNewGameInfo";
import HeroNewArmor from "./firstPage/HeroNewArmor";
import HeroNewExperiencePoints from "./firstPage/HeroNewExperiencePoints";
import HeroNewMovement from "./firstPage/HeroNewMovement";
import HeroNewArmorPoints from "./firstPage/HeroNewArmorPoints";



export default function FirstPageNew(props) {


    return (
        <>
            <Grid container spacing={4}>

                <Grid item xs={12}>
                    <Grid container spacing={4}>

                        <Grid item xs={6}>
                            <HeroNewInfo  character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroNewDescription character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroNewTraits character={props.character} setChar={props.setChar}/>
                            <br/>
                            {/*<HeroNewWeapon character={props.character} setChar={props.setChar} />*/}
                            {/*<br/>*/}
                            {/*<HeroNewArmor character={props.character} setChar={props.setChar}/>*/}

                        </Grid>

                        {/*<Grid item xs={1}/>*/}
                        <Grid item xs={6}>

                            <HeroNewGameInfo character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroNewExperiencePoints character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroNewMovement character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroNewArmorPoints character={props.character} setChar={props.setChar}/>
                            <br/>
                            <HeroActionSheet/>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

        </>
    )

}