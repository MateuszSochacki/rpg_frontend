import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroEditSpells from "./thirdPage/HeroEditSpells";


export default function ThirdPageEdit(props) {

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
                            <HeroEditSpells character={props.character} update={props.update}/>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}