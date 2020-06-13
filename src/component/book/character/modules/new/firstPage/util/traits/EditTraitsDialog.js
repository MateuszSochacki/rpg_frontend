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


    const [character, setCharacter] = useState(props.character);


    const setMainTraits = (hero) => {
        // let character=props.character;
        // character.hero=characterSheetDto;
        let char;

        char = {
            ...character,
            traits: {
                ...character.traits,
                mainTraits:hero,


                currentMainTraits: hero
            }

        };
        setCharacter(char);


        // await API.post("/user/sheet/add",character).then((response)=>{
        //     const res =response.data;
        //     setInfo(res.hero);
        //     setSaveButton(false);
        //     props.update()
        // })

    };
    const setSecondaryTraits = (hero) => {

        let char=
        {
            ...character,

            traits: {
                ...character.traits,
                secondaryTraits:hero,
                currentSecondaryTraits: hero
            }

        };
        setCharacter(char)

        // let character=props.character;
        // character.hero=characterSheetDto;


        // await API.post("/user/sheet/add",character).then((response)=>{
        //     const res =response.data;
        //     setInfo(res.hero);
        //     setSaveButton(false);
        //     props.update()
        // })

    };


    const saveButton = async () => {

        props.setChar(character);
        props.close();
    };


    useEffect(() => {
        setCharacter(props.character)
    }, [props.character]);



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


                        <Grid item xs={6}>
                            <EditMainTraits mainTraits={props.character}
                                            editedCharacter={setMainTraits}/>
                        </Grid>
                        <Grid item xs={6}>
                            <EditSecondTraits secondaryTraits={props.character}
                                              editedCharacter={setSecondaryTraits}/>
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