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


export default function HeroEditSkills(props) {

    const [basicSkills,setBasicSkills] = useState([]);
    const [advancedSkills,setAdvancedSkils] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //TODO have to figure it out what to do with this strings below:
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


        const sortSkills=(skills)=>{
            let basic=[];
            let advanced=[];
            skills.forEach(skill=>{
                if (skill.type.toLowerCase()==="podstawowa"){
                    basic.push(skill)

                }
                else if(skill.type.toLowerCase()==="zaawansowana"){
                    advanced.push(skill)
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

    }, [isLoading]);
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

                                    <Grid container spacing={1} direction={"row"}>
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

                                            <Grid container direction={"row"} key={key} style={{paddingBottom:"26px"}}>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.name}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtOnce}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtTwice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtThrice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.relAbility}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>


                                                </Grid>
                                            </Grid>
                                        )
                                    )

                                    }



                                    <Grid container spacing={1} direction={"row"} style={{marginTop:15}}>
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

                                            <Grid container direction={"row"} key={key} style={{paddingBottom:"26px"}}>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.name}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtOnce}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtTwice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    <Checkbox
                                                        color="primary"
                                                        checked={skill.boughtThrice}
                                                        inputProps={{'aria-label': 'secondary checkbox'}}
                                                    />

                                                </Grid>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill.relAbility}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>


                                                </Grid>
                                            </Grid>
                                        )
                                    )

                                    }

                                    <Grid container spacing={1} direction={"row"} style={{marginTop:15}} justify={"center"}>
                                        <Grid item xs={12} >
                                            <HeroSkillsLetters> <b>Do wykupienia w obecnej profesji</b></HeroSkillsLetters>
                                        </Grid>

                                    </Grid>
                                    {props.character.heroProfession.skillList.map((skill, key) => (

                                            <Grid container direction={"row"} key={key} style={{paddingBottom:"26px"}}>
                                                <Grid item xs={4}>
                                                    <HeroTextField value={skill}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>

                                                <Grid item xs={4}>
                                                    <ArmoryButton variant="contained" color="primary">Kup</ArmoryButton>


                                                </Grid>
                                            </Grid>
                                        )
                                    )

                                    }
                                </Grid>

                            </>
                        </HeroPanelDetails>
                    </HeroPanel>
                }
            </Paper>
        </>
    )

}