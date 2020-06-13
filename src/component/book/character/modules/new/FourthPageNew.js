import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroEditMutation from "./fourthPage/HeroEditMutation";


export default function FourthPageNew(props) {

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
                        <HeroEditMutation character={props.character} update={props.update}/>


                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}