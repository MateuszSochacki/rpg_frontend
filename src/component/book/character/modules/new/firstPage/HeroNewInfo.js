import React, {useState,useEffect} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from "../../../../../API/API";
import {SaveButton} from "../../../../../styles/Styles";

//DONE new professions have adequate +traits and eats 100exp after changing
//TODO have to check if abilities or/and skills are already learned but this have to be done after ability/skill component


export default function HeroNewInfo(props) {
    const [info, setInfo] = useState({
        name: "",
        race: "",
        currentProfession: "",
        previousProfession: ""

    });
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;



    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

        // setSaveButton(true);

    };
    const update = ()=>{
        let chara = props.character;
        chara = {
            ...chara,
            hero:info
        };
        props.setChar(chara)
    };


    const saveCharacterInfo= async (name)=>{

        let newCharacter=0;
        (async () => {
            const response = await API.post("/book/profession/name", {name});
            newCharacter = await response.data;
        })().then(()=>{
            let char=props.character;

            //check if there is difference between base stats and acquired during adventure
            //check if profession actually rise this stat

            char={
                ...char,
                hero:{...char.hero,
                    currentProfession:name
                },

                heroProfession:{
                    ...char.heroProfession,
                    mainTraits:newCharacter.mainTraits,
                    secondaryTraits:newCharacter.secondaryTraits,
                    skillList: newCharacter.skillList,
                    abilityList: newCharacter.abilityList,
                    equipmentList: newCharacter.equipmentList ,
                    armorList: newCharacter.armorList,
                    weaponList: newCharacter.weaponList,
                }
            };
            props.setChar(char);



        });


    };


    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await API.get("/book/profession/all");
            let professions = await response.data;
            let temp = professions.professionDto;
            if (active) {
                setOptions(temp);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    return (

        <Paper elevation={8}>

            <HeroPanel expanded={true}>
                <HeroPanelSummary>
                    <HeroText align={"center"}>
                        Bohater
                    </HeroText>
                </HeroPanelSummary>
                <HeroPanelDetails>
                    <>
                        <Grid container>
                            <Grid item xs={12}>
                                <HeroTextField id="heroName" label="Imię:" value={info.name}
                                               onChange={handleChange("name")} onBlur={update}/>
                                <HeroTextField id="race" label="Rasa:" value={info.race}
                                               onChange={handleChange("race")} onBlur={update}/>
                                <Autocomplete

                                    id="asynchronous-demo"
                                    // style={{ width: 300 }}
                                    open={open}
                                    disableClearable={true}
                                    getOptionLabel={(option)=>option.name}

                                    onChange={((event, newValue) => {

                                        setInfo({...info, currentProfession: newValue.name});
                                        saveCharacterInfo(newValue.name)

                                    })}
                                    onOpen={() => {
                                        setOpen(true);
                                    }}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                    getOptionSelected={(option, value) => option.name === value.name}
                                    options={options}
                                    loading={loading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Obecna profesja"
                                            disabled
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <React.Fragment>
                                                        {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                                        {params.InputProps.endAdornment}
                                                    </React.Fragment>
                                                ),
                                            }}
                                        />
                                    )}
                                />


                            </Grid>

                        </Grid>


                    </>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )

}