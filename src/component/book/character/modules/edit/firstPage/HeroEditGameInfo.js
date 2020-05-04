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

export default function HeroEditGameInfo(props) {
    const [info, setInfo] = useState({
        name: props.character.player.name,
        campaign: props.character.player.campaign,
        gameMaster: props.character.player.gameMaster,
        yearOfCampaign: props.character.player.yearOfCampaign

    });
    const [saveButton, setSaveButton] = React.useState(false);
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            name: props.character.player.name,
            campaign: props.character.player.campaign,
            gameMaster: props.character.player.gameMaster,
            yearOfCampaign: props.character.player.yearOfCampaign
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const campaign={
            name: info.name,
            campaign: info.campaign,
            gameMaster: info.gameMaster,
            yearOfCampaign: info.yearOfCampaign
        };
        let character=props.character;
        character.player=campaign;


        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            setInfo(res.player);
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
                            gracz
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container>
                                <Grid item xs={6} style={{borderRight:"1px solid",}}>
                                    <HeroTextField id="plaeyrName" label="Imię:" value={info.name} style={{borderBottom:"1px solid",}}  onChange={handleChange("name")}/>
                                    <HeroTextField id="campaign" label="Kampania:" value={info.campaign}  onChange={handleChange("campaign")}/>

                                </Grid>
                                <Grid item xs={6} style={{borderLeft:"1px solid",}}>
                                    <HeroTextField id="gameMaster" label="Mistrz gry:" value={info.gameMaster} style={{borderBottom:"1px solid",}}  onChange={handleChange("gameMaster")}/>
                                    <HeroTextField id="yearOfCampaign" label="Rok kampanii:" value={info.yearOfCampaign}  onChange={handleChange("yearOfCampaign")}/>
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