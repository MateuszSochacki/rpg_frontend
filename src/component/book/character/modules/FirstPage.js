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
import {Panel, PanelSummary} from "../../../styles/expansionPanel/Panel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";


export default function FirstPage(props) {

    return (
        <>
            <Grid container spacing={4}>
                {props.sheet.map((character, key) => (
                    <Grid item xs={12} key={key}>
                        <Panel key={key}>
                            <PanelSummary key={key}>
                                <Typography variant="h5" component="h5" align={"left"}>
                                    {character.hero.name}
                                </Typography>
                            </PanelSummary>
                            <ExpansionPanelDetails key={key}>
                                <Grid container spacing={4}>

                                    <Grid item xs={6}>
                                        <HeroInfo info={character.hero} key={key}/>
                                        <br/>
                                        <HeroDescription description={character.description}/>
                                        <br/>
                                        <HeroTraits traits={character.traits} profession={character.hero.currentProfession}/>
                                        <br/>
                                        <HeroWeapon weapons={character.weapon}/>
                                        <br/>
                                        <HeroArmor armors={character.armor}/>

                                    </Grid>

                                    {/*<Grid item xs={1}/>*/}
                                    <Grid item xs={6}>

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
                            </ExpansionPanelDetails>

                        </Panel>

                    </Grid>
                ))}
            </Grid>

        </>
    )

}