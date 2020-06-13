import React, {useEffect, useState} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import API from "../../../../../API/API";
import {SaveButton} from "../../../../../styles/Styles";

export default function HeroNewExperiencePoints(props) {
    const [info, setInfo] = useState({
        current: "",
        sum:"",


    });
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };
    const update = ()=>{
        let chara = props.character;
        chara = {
            ...chara,
            experiencePoints:info
        };
        props.setChar(chara)
    };

    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            punkty doświadczenia
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={3} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="currentExp" label="Obecne:" value={info.current} onBlur={update} onChange={handleChange("current")} type={"number"} onBlur={update}/>

                                </Grid>
                                <Grid item xs={9} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="sumExp" label="Razem:" value={info.sum} onBlur={update} onChange={handleChange("sum")} type={"number"} onBlur={update}/>
                                </Grid>

                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}