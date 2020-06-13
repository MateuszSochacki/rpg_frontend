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

export default function HeroNewMovement(props) {
    const [info, setInfo] = useState({
        move: "",
        strike:"",
        run:"",


    });
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };
    const update = ()=>{
        let chara = props.character;
        chara = {
            ...chara,
            movement:info
        };
        props.setChar(chara)
    };


    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            ruch w walce
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={3} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="movement" label="Ruch/odwrót:" value={info.move} onChange={handleChange("move")} type={"number"}/>

                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",borderRight:"1px solid"}}>
                                    <HeroTextField id="strike" label="Szarża:" value={info.strike} onChange={handleChange("strike")} type={"number"}/>
                                </Grid>
                                <Grid item xs={3} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="run" label="Bieg:" value={info.run} onChange={handleChange("run")} type={"number"}/>
                                </Grid>

                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}