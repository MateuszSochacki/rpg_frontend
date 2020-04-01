import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters} from "../../../../../styles/Styles";
import Checkbox from '@material-ui/core/Checkbox';


export default function HeroSkills(props) {

    const [basicSkills,setBasicSkills] = useState([]);
    const [advancedSkills,setAdvancedSkils] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let didCancel = false;


        const sortSkills=(skills)=>{
            let basic=[];
            let advanced=[];
            skills.forEach(skill=>{
                if (skill.type.toLowerCase()==="podstawowy"){
                    basic.push(skill)

                }
                else if(skill.type.toLowerCase()==="zaawansowany"){
                    advanced.push(skill)
                }

            });
            setBasicSkills(basic);
            setAdvancedSkils(advanced);
            setIsLoading(false);

        };

        sortSkills(props.skills);
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

                                    <Grid container direction={"row"}>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Podstawowe</b></HeroSkillsLetters>
                                            <br/>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+20</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>
                                            <br/>

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
                                    <br/>


                                    <Grid container direction={"row"} >
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zaawansowane</b></HeroSkillsLetters>
                                            <br/>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <HeroSkillsLetters> <b>Wykupione</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={1}>
                                            <HeroSkillsLetters> <b>+10</b></HeroSkillsLetters>
                                            <br/>

                                        </Grid>
                                        <Grid item xs={4}>
                                            <HeroSkillsLetters> <b>Zdolności pokrewne</b></HeroSkillsLetters>
                                            <br/>

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
                                </Grid>

                            </>
                        </HeroPanelDetails>
                    </HeroPanel>
                }
            </Paper>
        </>
    )

}