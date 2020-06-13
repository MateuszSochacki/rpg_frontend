import React, {useCallback, useEffect, useMemo, useState} from "react";
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


export default function HeroNewDescription(props) {

    const [info, setInfo] = useState({
        age: "",
        eyeColor: "",
        hairColor: "",
        starSign: "",
        sex: "",
        weight: "",
        height: "",
        family: "",
        placeOfBirth: "",
        distinguishingMarks:"",

    });


    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };

    const update = ()=>{
        let chara = props.character;
        chara = {
            ...chara,
            description:info
        };
        props.setChar(chara)
    };

    // useEffect(()=>{
    //
    // },[]);

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
                                <HeroTextField id="age" label="Wiek: " value={info.age} onBlur={update} onChange={handleChange("age")}/>
                                <HeroTextField id="eyeColor" label="Kolor oczu:" value={info.eyeColor} onBlur={update}  onChange={handleChange("eyeColor")} />
                                <HeroTextField id="hairColor" label="Kolor włosów:"  value={info.hairColor} onBlur={update} onChange={handleChange("hairColor")} />
                                <HeroTextField id="starSign" label="Znak gwiezdny:"  value={info.starSign} onBlur={update} onChange={handleChange("starSign")} />

                            </Grid>
                            <Grid item xs={6}>
                                <HeroTextField id="sex" label="Płeć: " value={info.sex} onBlur={update} onChange={handleChange("sex")} />
                                <HeroTextField id="weight" label="Waga: " value={info.weight} onBlur={update}  onChange={handleChange("weight")} />
                                <HeroTextField id="height" label="Wzrost: "  value={info.height} onBlur={update} onChange={handleChange("height")} />
                                <HeroTextField id="family" label="Rodzeństwo: " value={info.family} onBlur={update}  onChange={handleChange("family")} />
                            </Grid>
                            <HeroTextField id="placeOfBirth" label="Miejsce urodzenia: "  onBlur={update} value={info.placeOfBirth}  onChange={handleChange("placeOfBirth")}/>
                            <HeroTextField id="distinguishMark" label="Znaki szczególne: " onBlur={update}  value={info.distinguishingMarks} onChange={handleChange("distinguishingMarks")} />
                        </Grid>

                    </Grid>
                </Grid>
            </HeroPanelDetails>
        </HeroPanel>
        </Paper>
    )
}