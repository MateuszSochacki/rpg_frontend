import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroMutation from "./fourthPage/HeroMutation";


export default function FourthPage() {

    return (
        <>

            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Mutacje
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <HeroMutation/>


                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}