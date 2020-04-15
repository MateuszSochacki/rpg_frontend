import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import EditMainTraits from "./EditMainTraits";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import EditSecondTraits from "./EditSecondTraits";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import API from "../../../../../../../API/API";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditTraitsDialog(props) {


    const [currentExp,setCurrentExp] = useState(props.character.experiencePoints.current)
    const [character,setCharacter] = useState(props.character)
    const handleCurrentExpAdd = () =>{
        let exp = parseInt(currentExp) - 100;
        setCharacter({
            ...character,
            experiencePoints: {
                ...character.experiencePoints,
                current: exp
            },
        })
        setCurrentExp(exp);

    };
    const handleCurrentExpSubtract = () =>{
        let exp = parseInt(currentExp) + 100;
        setCharacter({
            ...character,
            experiencePoints: {
                ...character.experiencePoints,
                current: exp
            },
        })
        setCurrentExp(exp);
    };
    const setMainTraits= (profession,hero)=>{
        // let character=props.character;
        // character.hero=characterSheetDto;

        setCharacter({...character,
            experiencePoints:{
                ...character.experiencePoints,
                current:currentExp
            },
            heroProfession:{
                ...character.heroProfession,
            mainTraits:profession
            },
            traits:{
            ...character.traits,


                currentMainTraits:hero
        }

        });


        // await API.post("/user/sheet/add",character).then((response)=>{
        //     const res =response.data;
        //     setInfo(res.hero);
        //     setSaveButton(false);
        //     props.update()
        // })

    };
    const setSecondaryTraits= (profession,hero)=>{

        setCharacter({...character,
            experiencePoints:{
                ...character.experiencePoints,
                current:currentExp
            },
            heroProfession:{
            ...character.heroProfession,
                secondaryTraits:profession
            },
            traits:{
            ...character.traits,
                currentSecondaryTraits:hero
        }

        });
        // let character=props.character;
        // character.hero=characterSheetDto;


        // await API.post("/user/sheet/add",character).then((response)=>{
        //     const res =response.data;
        //     setInfo(res.hero);
        //     setSaveButton(false);
        //     props.update()
        // })

    };


    const saveButton= async ()=>{

        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
        });
        props.close()
    };


    useEffect(() => {
        setCharacter(character)
    }, [character]);

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Edycja punktów cech postaci"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12} justify={"center"} alignItems={"center"}>
                        <HeroTextField id="exp" label="Dostępne doświadczenie:" value={currentExp} style={{marginBottom:50}} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        <Grid item xs={6}>
                            <EditMainTraits mainTraits={props.character} current={currentExp} expChangeAdd={handleCurrentExpAdd} expChangeSubsract={handleCurrentExpSubtract} editedCharacter={setMainTraits}/>
                        </Grid>
                        <Grid item xs={6}>
                            <EditSecondTraits secondaryTraits={props.character} current={currentExp} expChangeAdd={handleCurrentExpAdd} expChangeSubsract={handleCurrentExpSubtract} editedCharacter={setSecondaryTraits}/>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Anuluj
                </SaveButton>
                <SaveButton onClick={saveButton} color="primary">
                    Zapisz
                </SaveButton>
            </DialogActions>
        </Dialog>
    )

}