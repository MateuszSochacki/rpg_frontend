import React from "react";

import Grid from "@material-ui/core/Grid";
import {ArmoryButton, HeroSkillsLetters, SaveButton} from "../../../../../styles/Styles";
import {HeroTextField} from "../../../../../styles/expansionPanel/Panel";
import AddNewSpell from "../firstPage/util/spell/AddNewSpell";
import AddNewMutation from "../firstPage/util/mutation/AddNewMutation";
import {Paper} from "@material-ui/core";
import API from "../../../../../API/API";

export default function HeroEditMutation(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const removeMutation = async (id) => {
        let chara = props.character;
        let mutations = props.character.mutations;
        delete mutations[id];
        mutations = mutations.filter(x => x !== undefined);

        chara = {
            ...chara,
            mutations: mutations
        };
        await API.post("/user/sheet/add", chara).then((response) => {
            const res = response.data;
            props.update();
        });

    };
    return (
        <>


            <Grid container >
                <Grid item xs={12}>

                    <Grid container style={{borderBottom: "1px solid"}}>
                        <Grid item xs={1}>
                            <HeroSkillsLetters><b>Punkty strachu</b></HeroSkillsLetters>
                        </Grid>
                        <Grid item xs={3}>
                            <HeroSkillsLetters><b>Nazwa Mutacji</b></HeroSkillsLetters>

                        </Grid>
                        <Grid item xs={2}>
                            <HeroSkillsLetters><b>Lokacja</b></HeroSkillsLetters>

                        </Grid>
                        <Grid item xs={4}>
                            <HeroSkillsLetters><b>Opis</b></HeroSkillsLetters>
                        </Grid>
                        <Grid item xs={2}>
                            <HeroSkillsLetters><b>Usuń</b></HeroSkillsLetters>
                        </Grid>


                    </Grid>
                    {props.character.mutations.map((mutation, key) => (
                        <Grid container key={key} style={{borderBottom: "1px solid"}} justify="flex-start"
                              alignItems="flex-start">
                            <Grid item xs={1}>
                                <HeroTextField value={mutation.fearPoints}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                            </Grid>
                            <Grid item xs={3}>
                                <HeroTextField value={mutation.name}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>

                            </Grid>
                            <Grid item xs={2}>
                                <HeroTextField value={mutation.location}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                            </Grid>
                            <Grid item xs={4}>
                                <HeroTextField value={mutation.description}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                               multiline
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <ArmoryButton variant="contained" color="primary"
                                              onClick={() => removeMutation(key)}>Usuń</ArmoryButton>
                            </Grid>


                        </Grid>
                    ))}
                    <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                        Dodaj Mutację
                    </SaveButton>

                </Grid>

            </Grid>

            {open ?
                <AddNewMutation open={open} close={handleClose} character={props.character} update={props.update}/>
                : null}

        </>
    )

}