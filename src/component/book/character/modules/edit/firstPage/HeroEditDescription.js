import React, {useState} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {SaveButton} from "../../../../../styles/Styles";
import API from "../../../../../API/API";


export default function HeroEditDescription(props) {

    const [info, setInfo] = useState({
        age: props.character.description.age,
        eyeColor: props.character.description.eyeColor,
        hairColor: props.character.description.hairColor,
        starSign: props.character.description.starSign,
        sex: props.character.description.sex,
        weight: props.character.description.weight,
        height: props.character.description.height,
        family: props.character.description.family,
        placeOfBirth: props.character.description.placeOfBirth,
        distinguishingMarks: props.character.description.distinguishingMarks,

    });
    const [saveButton, setSaveButton] = React.useState(false);


    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            age: props.character.description.age,
            eyeColor: props.character.description.eyeColor,
            hairColor: props.character.description.hairColor,
            starSign: props.character.description.starSign,
            sex: props.character.description.sex,
            weight: props.character.description.weight,
            height: props.character.description.height,
            family: props.character.description.family,
            placeOfBirth: props.character.description.placeOfBirth,
            distinguishingMarks: props.character.description.distinguishingMarks,
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const characterSheetDto={
            age: info.age,
            eyeColor: info.eyeColor,
            hairColor: info.hairColor,
            starSign: info.starSign,
            sex: info.sex,
            weight: info.weight,
            height: info.height,
            family: info.family,
            placeOfBirth: info.placeOfBirth,
            distinguishingMarks: info.distinguishingMarks,
        };
        let character=props.character;
        character.description=characterSheetDto;

        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            setInfo(res.description);
            setSaveButton(false);
            props.update()
        })

    };


    return(
        <Paper elevation={8}>
        <HeroPanel expanded={true}>
            <HeroPanelSummary>
                <HeroText>
                opis bohatera
                </HeroText>
            </HeroPanelSummary>
            <HeroPanelDetails>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6} style={{borderRight:"1px solid",}}>
                                <HeroTextField id="age" label="Wiek: " value={info.age} onChange={handleChange("age")}/>
                                <HeroTextField id="eyeColor" label="Kolor oczu:" value={info.eyeColor} onChange={handleChange("eyeColor")} />
                                <HeroTextField id="hairColor" label="Kolor włosów:" value={info.hairColor} onChange={handleChange("hairColor")} />
                                <HeroTextField id="starSign" label="Znak gwiezdny:" value={info.starSign} onChange={handleChange("starSign")} />

                            </Grid>
                            <Grid item xs={6}>
                                <HeroTextField id="sex" label="Płeć: " value={info.sex} onChange={handleChange("sex")} />
                                <HeroTextField id="weight" label="Waga: " value={info.weight} onChange={handleChange("weight")} />
                                <HeroTextField id="height" label="Wzrost: " value={info.height} onChange={handleChange("height")} />
                                <HeroTextField id="family" label="Rodzeństwo: " value={info.family} onChange={handleChange("family")} />
                            </Grid>
                            <HeroTextField id="placeOfBirth" label="Miejsce urodzenia: " value={info.placeOfBirth}  onChange={handleChange("placeOfBirth")}/>
                            <HeroTextField id="distinguishMark" label="Znaki szczególne: " value={info.distinguishingMarks} onChange={handleChange("distinguishingMarks")} />
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
                </Grid>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )
}