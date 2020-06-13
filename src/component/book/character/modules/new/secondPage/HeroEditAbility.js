import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {ArmoryButton, HeroSkillsLetters} from "../../../../../styles/Styles";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import API from "../../../../../API/API";

export default function HeroEditAbility(props) {

    const [options, setOptions] = useState([]);
    const [ability, setAbility] = useState([]);
    const [open, setOpen] = useState(false);
    const [buyButton,setBuyButton] = useState(true);
    const loading = open && options.length === 0;

    useEffect(()=>{

    },[props.character]);
    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await API.get("/book/ability/all");
            const ability = await response.data;
            let abilityArr = [];
            ability.abilities.forEach((s,key)=>{
                abilityArr[key]=s.name;
            });

            if (active) {
                setOptions(abilityArr);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading,options]);

    const deleteAbility = (ability,key) =>{
        let character = props.character;
        let tempAbility = character.ability;

        delete tempAbility[key];

        tempAbility = tempAbility.filter(x => x !== undefined);
        character={
            ...character,
            ability:tempAbility
        }
        API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            props.update();
        });


    }

    const addNewAbility= async ()=>{
        let info;
        (async () => {
            const response = await API.post("/book/ability/name", {name: ability});
            info = await response.data;
        })().then(()=>{
            let character = props.character;
            let newAbility = character.ability;
            newAbility.push({
                name: info.name,
                description:info.description
            });

            character={
                ...character,
                experiencePoints:{
                    ...character.experiencePoints,
                    current: parseInt(character.experiencePoints.current)-100
                },
                ability:newAbility
            };

            API.post("/user/sheet/add",character).then((response)=>{
                const res =response.data;
                props.update()
            })
        });
        setBuyButton(true);


    };


    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Zdolności
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>
                            <Grid container direction={"column"}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={5}>

                                        <HeroSkillsLetters><b>Zdolność</b></HeroSkillsLetters>


                                    </Grid>
                                    <Grid item xs={5}>
                                        <HeroSkillsLetters><b>Opis</b></HeroSkillsLetters>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroSkillsLetters> <b>Usuń</b></HeroSkillsLetters>


                                    </Grid>
                                </Grid>
                                {props.character.ability.map((ability, key) => (

                                        <Grid container direction={"row"} spacing={2} key={key} style={{paddingBottom:"26px"}}>
                                            <Grid item xs={5} >

                                                <HeroTextField value={ability.name}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                            </Grid>
                                            <Grid item xs={5} >
                                                <HeroTextField value={ability.description}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               multiline
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <ArmoryButton variant="contained" color="primary"
                                                              onClick={()=>{deleteAbility(ability,key)}}>Usuń</ArmoryButton>
                                            </Grid>
                                        </Grid>


                                ))}
                                <Grid container spacing={1} direction={"row"} style={{marginTop: 15}}
                                      justify={"center"}>
                                    <Grid item xs={12}>
                                        <HeroSkillsLetters> <b>Do wykupienia w obecnej
                                            profesji</b></HeroSkillsLetters>
                                        <Grid item xs={12} >
                                            <HeroSkillsLetters> <b>EXP: {props.character.experiencePoints.current}</b></HeroSkillsLetters>

                                        </Grid>
                                        <Typography component={"span"}>
                                            <HeroSkillsLetters component={"span"}>
                                            {props.character.heroProfession.abilityList.join(", ")}
                                            </HeroSkillsLetters>
                                            {/*{props.character.heroProfession.abilityList.map((abi, key) => (*/}
                                            {/*    <HeroSkillsLetters key={key} component={"span"}> {abi}</HeroSkillsLetters>*/}
                                            {/*))}*/}
                                        </Typography>
                                    </Grid>

                                </Grid>

                                <Grid container direction={"row"}  spacing={2} style={{paddingBottom: "26px"}} alignItems={"center"} justify={"space-between"}>
                                    <Grid item xs={1}/>
                                    <Grid item xs={5}>
                                        <Autocomplete

                                            id="asynchronousAbility"
                                            // style={{ width: 300 }}
                                            open={open}
                                            disabled={props.character.experiencePoints.current < 100}
                                            // value={"Czytanie i pisanie"}
                                            disableClearable={true}
                                            getOptionLabel={(option)=>option}
                                            onChange={((event, newValue) => {

                                                // setInfo({...info, currentProfession: newValue});
                                                setAbility(newValue);
                                                if(props.character.experiencePoints.current>=100)
                                                    setBuyButton(false);

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
                                                    label="Zdolności"
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


                                    <Grid item xs={5}>
                                        <ArmoryButton variant="contained" color="primary" onClick={addNewAbility} disabled={buyButton}>Kup</ArmoryButton>


                                    </Grid>
                                    <Grid item xs={1}/>

                                </Grid>
                            </Grid>

                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}