import React from "react";
import Grid from "@material-ui/core/Grid";
import HeroSkills from "./secondPage/HeroSkills";
import HeroAbility from "./secondPage/HeroAbility";
import HeroEquipment from "./secondPage/HeroEquipment";
import HeroMoney from "./secondPage/HeroMoney";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroSpells from "./thirdPage/HeroSpells";


export default function ThirdPage() {

    return (
        <>

            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Księga zaklęć
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <HeroSpells/>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}