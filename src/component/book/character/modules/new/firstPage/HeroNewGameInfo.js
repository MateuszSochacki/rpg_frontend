import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import API from "../../../../../API/API";
import {SaveButton} from "../../../../../styles/Styles";

export default function HeroNewGameInfo(props) {
    const [info, setInfo] = useState({
        name: "",
        campaign: "",
        gameMaster: "",
        yearOfCampaign: ""

    });
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };
    const update = ()=>{
        let chara = props.character;
        chara = {
            ...chara,
            player:info
        };
        props.setChar(chara)
    };


    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            gracz
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={6} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="plaeyrName" label="Imię:" value={info.name} style={{borderBottom:"1px solid",}}  onChange={handleChange("name")} onBlur={update}/>
                                    <HeroTextField id="campaign" label="Kampania:" value={info.campaign}  onChange={handleChange("campaign")} onBlur={update}/>

                                </Grid>
                                <Grid item xs={6} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="gameMaster" label="Mistrz gry:" value={info.gameMaster} style={{borderBottom:"1px solid",}} onBlur={update} onChange={handleChange("gameMaster")}/>
                                    <HeroTextField id="yearOfCampaign" label="Rok kampanii:" value={info.yearOfCampaign} onBlur={update} onChange={handleChange("yearOfCampaign")}/>
                                </Grid>
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
            </>
    )

}