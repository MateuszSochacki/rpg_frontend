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


export default function HeroEditInfo(props) {
    const [info, setInfo] = useState({
        name: props.character.hero.name,
        race: props.character.hero.race,
        currentProfession: props.character.hero.currentProfession,
        previousProfession: props.character.hero.previousProfession

    });
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [saveButton, setSaveButton] = React.useState(false);
    const loading = open && options.length === 0;
    const [character,setCharacter] = useState(0);



    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            name: props.character.hero.name,
            race: props.character.hero.race,
            currentProfession: props.character.hero.currentProfession,
            previousProfession: props.character.hero.previousProfession
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const characterSheet={
            name: info.name,
            race: info.race,
            currentProfession: info.currentProfession,
            previousProfession: info.previousProfession
        };
        let newCharacter=0;
        (async () => {
            let name = info.currentProfession;
            const response = await API.post("/book/profession/name", {name});
            newCharacter = await response.data;
        })().then(()=>{
            let char=props.character;
            char.hero=characterSheet;

            let check={
                mainTraits: {
                    fighting: 0,
                    shooting: 0 ,
                    vigor: 0,
                    resistance: 0,
                    agility: 0,
                    intelligence:0,
                    willpower: 0,
                    charisma: 0,
                },
                secondaryTraits: {
                    attack: 0,
                    health: 0,
                    strength:0,
                    endurance: 0,
                    speed: 0,
                    magic: 0,
                }
            };
            //check if there is difference between base stats and acquired during adventure
            check ={
                mainTraits: {
                    fighting: parseInt(char.traits.mainTraits.fighting)-parseInt(char.traits.currentMainTraits.fighting) ,
                    shooting: parseInt(char.traits.mainTraits.shooting)-parseInt(char.traits.currentMainTraits.shooting) ,
                    vigor: parseInt(char.traits.mainTraits.vigor)-parseInt(char.traits.currentMainTraits.vigor) ,
                    resistance: parseInt(char.traits.mainTraits.resistance)-parseInt(char.traits.currentMainTraits.resistance) ,
                    agility: parseInt(char.traits.mainTraits.agility)-parseInt(char.traits.currentMainTraits.agility) ,
                    intelligence:parseInt(char.traits.mainTraits.intelligence)-parseInt(char.traits.currentMainTraits.intelligence) ,
                    willpower: parseInt(char.traits.mainTraits.willpower)-parseInt(char.traits.currentMainTraits.willpower) ,
                    charisma: parseInt(char.traits.mainTraits.charisma)-parseInt(char.traits.currentMainTraits.charisma) ,
                },
                secondaryTraits: {
                    attack: parseInt(char.traits.secondaryTraits.attack)-parseInt(char.traits.currentSecondaryTraits.attack) ,
                    health: parseInt(char.traits.secondaryTraits.health)-parseInt(char.traits.currentSecondaryTraits.health) ,
                    strength: parseInt(char.traits.secondaryTraits.strength)-parseInt(char.traits.currentSecondaryTraits.strength) ,
                    endurance: parseInt(char.traits.secondaryTraits.endurance)-parseInt(char.traits.currentSecondaryTraits.endurance) ,
                    speed: parseInt(char.traits.secondaryTraits.speed)-parseInt(char.traits.currentSecondaryTraits.speed) ,
                    magic: parseInt(char.traits.secondaryTraits.magic)-parseInt(char.traits.currentSecondaryTraits.magic) ,
                }
            };

            //check if profession actually rise this stat
            check ={
                mainTraits: {
                    fighting: parseInt(newCharacter.mainTraits.fighting)+parseInt(check.mainTraits.fighting) ,
                    shooting: parseInt(newCharacter.mainTraits.shooting)+parseInt(check.mainTraits.shooting) ,
                    vigor: parseInt(newCharacter.mainTraits.vigor)+parseInt(check.mainTraits.vigor) ,
                    resistance: parseInt(newCharacter.mainTraits.resistance)+parseInt(check.mainTraits.resistance) ,
                    agility: parseInt(newCharacter.mainTraits.agility)+parseInt(check.mainTraits.agility) ,
                    intelligence:parseInt(newCharacter.mainTraits.intelligence)+parseInt(check.mainTraits.intelligence) ,
                    willpower: parseInt(newCharacter.mainTraits.willpower)+parseInt(check.mainTraits.willpower) ,
                    charisma: parseInt(newCharacter.mainTraits.charisma)+parseInt(check.mainTraits.charisma) ,
                },
                secondaryTraits: {
                    attack: parseInt(newCharacter.secondaryTraits.attack)+parseInt(check.secondaryTraits.attack) ,
                    health: parseInt(newCharacter.secondaryTraits.health)+parseInt(check.secondaryTraits.health) ,
                    strength: parseInt(newCharacter.secondaryTraits.strength)+parseInt(check.secondaryTraits.strength) ,
                    endurance: parseInt(newCharacter.secondaryTraits.endurance)+parseInt(check.secondaryTraits.endurance) ,
                    speed: parseInt(newCharacter.secondaryTraits.speed)+parseInt(check.secondaryTraits.speed) ,
                    magic: parseInt(newCharacter.secondaryTraits.magic)+parseInt(check.secondaryTraits.magic) ,
                }
            };

            if(check.mainTraits.fighting<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        fighting: 0
                    }
                }
            };
            if(check.mainTraits.shooting<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        shooting: 0
                    }
                }
            };
            if(check.mainTraits.vigor<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        vigor: 0
                    }
                }
            }
            if(check.mainTraits.resistance<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        resistance: 0
                    }
                }
            }
            if(check.mainTraits.agility<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        agility: 0
                    }
                }
            }
            if(check.mainTraits.intelligence<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        intelligence: 0
                    }
                }
            }
            if(check.mainTraits.willpower<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        willpower: 0
                    }
                }
            }
            if(check.mainTraits.charisma<0){
                check={
                    ...check,
                    mainTraits:{
                        ...check.mainTraits,
                        charisma: 0
                    }
                }
            }
            if(check.secondaryTraits.attack<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        attack: 0
                    }
                }
            }
            if(check.secondaryTraits.health<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        health: 0
                    }
                }
            }
            if(check.secondaryTraits.strength<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        strength: 0
                    }
                }
            }
            if(check.secondaryTraits.endurance<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        endurance: 0
                    }
                }
            }
            if(check.secondaryTraits.speed<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        speed: 0
                    }
                }
            }
            if(check.secondaryTraits.magic<0){
                check={
                    ...check,
                    secondaryTraits:{
                        ...check.secondaryTraits,
                        magic: 0
                    }
                }
            }




            char={
                ...char,
                experiencePoints:{
                    ...char.experiencePoints,
                    current: parseInt(char.experiencePoints.current) -100,
                },
                heroProfession:{
                    ...char.heroProfession,
                    mainTraits:check.mainTraits,
                    secondaryTraits:check.secondaryTraits,
                    skillList: newCharacter.skillList,
                    abilityList: newCharacter.abilityList,
                    equipmentList: newCharacter.equipmentList ,
                    armorList: newCharacter.armorList,
                    weaponList: newCharacter.weaponList,
                }
            };

            // uncomment
            API.post("/user/sheet/add",char).then((response)=>{
                const res =response.data;
                setInfo(res.hero);
                setSaveButton(false);
                props.update()
            })
        });


    };

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            let name = info.currentProfession;
            const response = await API.post("/book/profession/name", {name});
            const professions = await response.data;
            const temp = professions.outputProf;
            temp.unshift(props.character.hero.currentProfession);


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
                                               onChange={handleChange("name")}/>
                                <HeroTextField id="race" label="Rasa:" value={info.race}
                                               onChange={handleChange("race")}/>
                                {/*<HeroTextField id="currentProfession" label="Obecna profesja:" defaultValue={props.info.currentProfession} onChange={handleChange("currentProfession")}/>*/}
                                <Autocomplete

                                    id="asynchronous-demo"
                                    // style={{ width: 300 }}
                                    open={open}
                                    disabled={props.character.experiencePoints.current < 100}
                                    value={info.currentProfession}
                                    disableClearable={true}
                                    getOptionLabel={(option)=>option}
                                    onChange={((event, newValue) => {

                                        // setInfo({...info, currentProfession: newValue});
                                        setSaveButton(true);

                                        if (newValue === props.character.hero.currentProfession) {

                                            setInfo({name: props.character.hero.name,
                                                race: props.character.hero.race,
                                                currentProfession: newValue,
                                                previousProfession: props.character.hero.previousProfession})
                                        } else {
                                            setInfo({name: props.character.hero.name,
                                                race: props.character.hero.race,
                                                currentProfession: newValue,
                                                previousProfession: props.character.hero.currentProfession});
                                        }
                                    })}
                                    onOpen={() => {
                                        setOpen(true);
                                    }}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                    // getOptionSelected={(option, value) => option.name === value.name}
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


                                <HeroTextField id="previousProfession" label="Poprzednia profesja:"
                                               value={info.previousProfession}
                                               disabled
                                               onChange={handleChange("previousProfession")}/>
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


                    </>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )

}