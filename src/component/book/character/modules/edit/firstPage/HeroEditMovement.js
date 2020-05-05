import React, {useState} from "react";
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

export default function HeroEditMovement(props) {
    const [info, setInfo] = useState({
        move: props.character.movement.move,
        strike: props.character.movement.strike,
        run: props.character.movement.run,


    });
    const [saveButton, setSaveButton] = React.useState(false);
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            move: props.character.movement.move,
            strike: props.character.movement.strike,
            run: props.character.movement.run,
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const movement={
            move: info.move,
            strike: info.strike,
            run: info.run,
        };
        let character=props.character;
        character.movement=movement;


        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            setInfo(res.movement);
            setSaveButton(false);
            props.update()
        })

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
                                {saveButton ?
                                    <>
                                        <SaveButton variant="contained" onClick={revertChanges}>
                                            Anuluj
                                        </SaveButton>
                                        <SaveButton variant="contained" color="primary" onClick={saveCharacterInfo}>
                                            Zapisz
                                        </SaveButton>
                                    </>
                                    : <></>}
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}