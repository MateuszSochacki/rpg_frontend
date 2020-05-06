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

export default function HeroEditExperiencePoints(props) {
    const [info, setInfo] = useState({
        current: props.character.experiencePoints.current,
        sum: props.character.experiencePoints.sum,


    });
    const [saveButton, setSaveButton] = React.useState(false);
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            current: props.character.experiencePoints.current,
            sum: props.character.experiencePoints.sum,
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const exp={
            current: info.current,
            sum: info.sum,
        };
        let character=props.character;
        character.experiencePoints=exp;



        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            setInfo(res.experiencePoints);
            setSaveButton(false);
            props.update()
        })

    };
    useEffect(()=>{
        setInfo({
            current: props.character.experiencePoints.current,
            sum: props.character.experiencePoints.sum,
        });
    },[props.character.experiencePoints]);
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
                                    <HeroTextField id="currentExp" label="Obecne:" value={info.current} onChange={handleChange("current")} type={"number"}/>

                                </Grid>
                                <Grid item xs={9} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="sumExp" label="Razem:" value={info.sum} onChange={handleChange("sum")} type={"number"}/>
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