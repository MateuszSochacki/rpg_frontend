import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import HeroSpells from "./../preview/thirdPage/HeroSpells";


export default function ThirdPagePreview(props) {

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
                            <HeroSpells spells={props.sheet.spell}/>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>


        </>
    )

}