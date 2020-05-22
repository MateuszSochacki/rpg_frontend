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
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from '@material-ui/lab/Autocomplete';
import API from "../../../../../API/API";


export default function HeroEditSkills(props) {

    const [basicSkills, setBasicSkills] = useState([]);
    const [advancedSkills, setAdvancedSkils] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = React.useState([]);
    const [skill, setSkill] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [buyButton,setBuyButton] = useState(true);
    const [optional, setOptional] =useState({optional:""});


    const loading = open && options.length === 0;

    // Not worth to implement cuz too many operations are needed on strings so it have to be more flexible more like player driven
    // cuz what if player wants to learn skill that is not included in his prof? etc.
    // have to figure it out what to do with this strings below:
    // dowolne trzy
    // dowolne cztery
    // dowolne dwie, dowolne dwa
    // dowolny, dowolna
    // (skill/skill albo skill) have to be more consistent cuz we can't have , and / like wtf
    // (skill, skill albo skill)
    // (skill)
    // (skill albo skill/skill) DAFUQ?
    // I love how different translator was assigned to do basic profs and advanced profs. Consistency level: tard
    // jedno z:, jedna z:
    // dwie z:


    useEffect(() => {
        let didCancel = false;


        const sortSkills = (skills) => {
            let basic = [];
            let advanced = [];
            skills.forEach((skill,key) => {
                if (skill.type.toLowerCase() === "podstawowa") {
                    basic.push({id:key, skill:skill})

                } else if (skill.type.toLowerCase() === "zaawansowana") {
                    advanced.push({id:key, skill:skill})
                }

            });
            setBasicSkills(basic);
            setAdvancedSkils(advanced);
            setIsLoading(false);

        };

        sortSkills(props.character.skill);
        return () => {
            // setBasicSkils([]);
            // setAdvancedSkils([]);
            didCancel = true;
        };

    }, [isLoading,props.character]);
    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await API.get("/book/skill/all");
            const skill = await response.data;
            let skillArr = [];
            skill.skillDtos.forEach((s,key)=>{
                skillArr[key]=s.name;
            });

            if (active) {
                setOptions(skillArr);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading,options]);

    const handleChange = name => event => {
        if (event.target.value.indexOf("(")===-1 && event.target.value.indexOf(")")===-1) {
            setOptional({[name]: "(" + event.target.value + ")"});
        }else {
            setOptional({[name]: event.target.value});

        }
    };
    const upgradeSkill = async (skill,times)=>{
        let character=props.character;
        if (times==="twice"){
            let uppingSkill = skill.skill;
            let tempSkill=character.skill;
            uppingSkill={
                ...uppingSkill,
                boughtTwice:true
            };
            tempSkill[skill.id]=uppingSkill;

            character={
                ...character,
                skill:
                    tempSkill,

                experiencePoints: {
                    ...character.experiencePoints,
                    current:parseInt(character.experiencePoints.current)-100
                }
            };


        }else
            if (times==="thrice"){
                let uppingSkill = skill.skill;
                let tempSkill=character.skill;
                uppingSkill={
                    ...uppingSkill,
                    boughtThrice:true
                };
                tempSkill[skill.id]=uppingSkill;

                character={
                    ...character,
                    skill:
                        tempSkill,

                    experiencePoints: {
                        ...character.experiencePoints,
                        current:parseInt(character.experiencePoints.current)-100
                    }
                };
        }
        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            props.update();
        });



    };
    const addNewSkill= async ()=>{
        let info;
        (async () => {
            const response = await API.post("/book/skill/name", {name: skill});
            info = await response.data;
        })().then(()=>{
            let character = props.character;
            let newSkill = character.skill;
            newSkill.push({
                name: info.name+" "+optional.optional,
                type: info.type,
                boughtOnce: true,
                boughtTwice: false,
                boughtThrice: false,
                relAbility: info.relAbility});

            character={
                ...character,
                experiencePoints:{
                    ...character.experiencePoints,
                    current: parseInt(character.experiencePoints.current)-100
                },
                skill:newSkill
            };

            API.post("/user/sheet/add",character).then((response)=>{
                const res =response.data;
                props.update()
            })
        });


    };




    return (
        <>
            <Paper elevation={8}>
                {isLoading ? null :
                    <HeroPanel expanded={true}>
                        <HeroPanelSummary>
                            <HeroText align={"center"}>
                                umiejętności
                            </HeroText>
                        </HeroPanelSummary>
                        <HeroPanelDetails>
                            <>

                                <Grid container direction={"column"}>


                                    <Grid container spacing={1} direction={"row"} alignItems={"center"} justify={"space-between"}>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Podstawowe</b></HeroSkillsLetters>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+20</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>


                                        </Grid>
                                    </Grid>
                                    {basicSkills.map((skill, key) => (

                                        <Grid container spacing={1} direction={"row"} key={key} style={{paddingBottom: "26px"}} alignItems={"center"} justify={"space-between"}>
                                            <Grid item xs={4}>
                                                <HeroTextField value={skill.skill.name}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Checkbox
                                                    color="primary"
                                                    checked={skill.skill.boughtOnce}
                                                    inputProps={{'aria-label': 'secondary checkbox'}}
                                                />

                                            </Grid>
                                            <Grid item xs={1}>
                                                {skill.skill.boughtTwice? <Checkbox
                                                        color="primary"
                                                        checked={skill.skill.boughtTwice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />
                                                    :
                                                    props.character.experiencePoints.current < 100 ?
                                                        <Checkbox
                                                            disabled={props.character.experiencePoints.current < 100}
                                                            color="primary"
                                                            checked={skill.skill.boughtTwice}
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                        :
                                                        <ArmoryButton variant="contained" color="primary"
                                                                      onClick={()=>{upgradeSkill(skill,"twice")}}>Kup</ArmoryButton>

                                                }
                                            </Grid>
                                            <Grid item xs={1}>
                                                {
                                                    skill.skill.boughtTwice ? skill.skill.boughtThrice ?
                                                        <Checkbox
                                                            color="primary"
                                                            checked={skill.skill.boughtThrice}
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                        :
                                                        props.character.experiencePoints.current < 100 ?
                                                            <Checkbox
                                                                disabled={props.character.experiencePoints.current < 100}
                                                                color="primary"
                                                                checked={skill.skill.boughtThrice}
                                                                inputProps={{'aria-label': 'secondary checkbox'}}
                                                            />
                                                            :
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={()=>{upgradeSkill(skill,"thrice")}}>Kup</ArmoryButton>
                                                        :
                                                        <Checkbox
                                                            disabled={true}
                                                            color="primary"
                                                            checked={skill.skill.boughtThrice}
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                }


                                            </Grid>
                                            <Grid item xs={4}>
                                                <HeroTextField value={skill.skill.relAbility}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>


                                            </Grid>
                                        </Grid>
                                        )
                                    )

                                    }


                                    <Grid container spacing={1} direction={"row"} style={{marginTop: 15}} alignItems={"center"} justify={"space-between"}>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zaawansowane</b></HeroSkillsLetters>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>


                                        </Grid>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>


                                        </Grid>
                                    </Grid>
                                    {advancedSkills.map((skill, key) => (

                                            <Grid container spacing={1} direction={"row"} key={key} style={{paddingBottom: "26px"}} alignItems={"center"} justify={"space-between"}>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.skill.name}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.skill.boughtOnce}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    {skill.skill.boughtTwice? <Checkbox
                                                            color="primary"
                                                            checked={skill.skill.boughtTwice}
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                        :
                                                        props.character.experiencePoints.current < 100 ?
                                                        <Checkbox
                                                            disabled={props.character.experiencePoints.current < 100}
                                                            color="primary"
                                                            checked={skill.skill.boughtTwice}
                                                            inputProps={{'aria-label': 'secondary checkbox'}}
                                                        />
                                                        :
                                                        <ArmoryButton variant="contained" color="primary"
                                                                      onClick={()=>{upgradeSkill(skill,"twice")}}>Kup</ArmoryButton>

                                                    }
                                                </Grid>
                                                <Grid item xs={1}>
                                                    {
                                                        skill.skill.boughtTwice ? skill.skill.boughtThrice ?
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.skill.boughtThrice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />
                                                    :
                                                        props.character.experiencePoints.current < 100 ?
                                                            <Checkbox
                                                                disabled={props.character.experiencePoints.current < 100}
                                                                color="primary"
                                                                checked={skill.skill.boughtThrice}
                                                                inputProps={{'aria-label': 'secondary checkbox'}}
                                                            />
                                                            :
                                                            <ArmoryButton variant="contained" color="primary"
                                                                             onClick={()=>{upgradeSkill(skill,"thrice")}}>Kup</ArmoryButton>
                                                            :
                                                            <Checkbox
                                                                disabled={true}
                                                                color="primary"
                                                                checked={skill.skill.boughtThrice}
                                                                inputProps={{'aria-label': 'secondary checkbox'}}
                                                            />
                                                    }


                                                </Grid>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.skill.relAbility}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>


                                                </Grid>
                                            </Grid>
                                        )
                                    )

                                    }

                                    <Grid container spacing={1} direction={"row"} style={{marginTop: 15}}
                                          justify={"center"}>
                                        <Grid item xs={12}>
                                            <HeroSkillsLetters> <b>Do wykupienia w obecnej
                                                profesji</b></HeroSkillsLetters>
                                            <Grid item xs={12} >
                                                <HeroSkillsLetters> <b>EXP: {props.character.experiencePoints.current}</b></HeroSkillsLetters>

                                            </Grid>
                                            <Typography component={"span"}>
                                                {props.character.heroProfession.skillList.map((skill, key) => (
                                                    <HeroSkillsLetters key={key}> {skill}</HeroSkillsLetters>
                                                ))}
                                            </Typography>
                                        </Grid>

                                    </Grid>

                                    <Grid container direction={"row"}  spacing={2} style={{paddingBottom: "26px"}} alignItems={"center"} justify={"space-between"}>
                                        <Grid item xs={4}>
                                            <Autocomplete

                                                id="asynchronousSkills"
                                                // style={{ width: 300 }}
                                                open={open}
                                                disabled={props.character.experiencePoints.current < 100}
                                                // value={"Czytanie i pisanie"}
                                                disableClearable={true}
                                                getOptionLabel={(option)=>option}
                                                onChange={((event, newValue) => {

                                                    // setInfo({...info, currentProfession: newValue});
                                                    setSkill(newValue);
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
                                                        label="Umiejętności"
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
                                        <Grid item xs={4}>
                                            <HeroTextField label={"Opcjonalnie"} placeholder={"np.: Teologia"} disabled={props.character.experiencePoints.current < 100} value={optional.optional}
                                                           inputProps={{min: 0, style: {textAlign: "center"}}}  onChange={handleChange("optional")}/>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <ArmoryButton variant="contained" color="primary" onClick={addNewSkill} disabled={buyButton}>Kup</ArmoryButton>


                                        </Grid>

                                    </Grid>

                                </Grid>

                            </>
                        </HeroPanelDetails>
                    </HeroPanel>
                }
            </Paper>
        </>
    )

}