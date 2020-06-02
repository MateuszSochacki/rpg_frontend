import React from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {ArmoryButton, SaveButton} from "../../../../../styles/Styles";
import EditWeaponDialog from "../firstPage/util/weapon/EditWeaponDialog";
import AddNewSpell from "../firstPage/util/spell/AddNewSpell";
import API from "../../../../../API/API";

export default function HeroEditSpells(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const removeSpell = async (id) => {
        let chara = props.character;
        let spell = props.character.spell;
        delete spell[id];
        spell = spell.filter(x => x !== undefined);

        chara={
            ...chara,
            spell:spell
        };
        await API.post("/user/sheet/add", chara).then((response) => {
            const res = response.data;
            props.update();
        });

    };

    return (
        <>

            <Grid container>
                <Grid item xs={12} container justify="flex-start"
                      alignItems="flex-start">

                    <Grid container spacing={2} direction={"row"}>
                        {props.character.spell.map((spell, key) => (
                            <Grid item xs={6} key={key}>
                                <Paper elevation={5}>
                                    <HeroTextField id={"spellName" + key} label="Nazwa czaru:"
                                                   value={spell.name} key={"spellName" + key}/>
                                    <Grid container item xs={12}>
                                        <Grid item xs={6}>
                                            <HeroTextField id={"powerLevel" + key} label="Wymagany poziom mocy:"
                                                           value={spell.magicPower}/>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <HeroTextField id={"castTime" + key} label="Czas rzucania:"
                                                           value={spell.castTime}/>
                                        </Grid>
                                        <HeroTextField id={"ingredient" + key} label="Składnik:"
                                                       value={spell.ingredient}/>
                                        <HeroTextField id={"description" + key} rows={6}
                                                       multiline label="Opis:" value={spell.description}/>


                                    </Grid>
                                    <ArmoryButton variant="contained" color="primary"
                                                  onClick={() => removeSpell(key)}>Usuń</ArmoryButton>


                                </Paper>
                            </Grid>


                        ))}

                    </Grid>
                    <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                        Dodaj zaklęcie
                    </SaveButton>
                </Grid>
                {open ?
                    <AddNewSpell open={open} close={handleClose} character={props.character} update={props.update}/>
                    : null}

            </Grid>


        </>
    )

}