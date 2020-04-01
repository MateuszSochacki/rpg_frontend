import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroMutation from "./../preview/fourthPage/HeroMutation";


export default function FourthPagePreview(props) {

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
                        <HeroMutation mutations={props.sheet.mutations}/>


                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}