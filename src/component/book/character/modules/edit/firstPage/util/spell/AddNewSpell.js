import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import API from "../../../../../../../API/API";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import CategoryFromList from "../../../../../../books/equipment/CategoryFromList";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddNewSpell(props) {

    const [categoryOpen, setCategoryOpen] = React.useState(false);
    const [spellOpen, setSpellOpen] = React.useState(false);

    const [spells, setSpells] = useState([]);
    const [saveButton, setSaveButton] = useState(false);
    const [unlockSpell, setUnlockSpell] = useState(false);
    const [categoryOptions, setCategoryOptions] = React.useState([]);
    const [spellOption, setSpellOptions] = React.useState([{name:"Zaklęcia"}]);
    const [spellValue, setSpellValue] = useState("");
    const loading = categoryOpen && categoryOptions.length === 0;

    useEffect(() => {
        let didCancel = false;

        async function fetchSpells() {
            await API.get("book/spell/all").then(async (response) => {

                if (!didCancel) {
                    const spells = response.data;
                    setSpells(spells.spellDtos);

                }
            }).then(() => {

                setCategoryOptions(CategoryFromList(spells));

            }).catch(error => {
                console.log(error)
            });
        }

        fetchSpells();
        return () => {

            didCancel = true;
        };
    }, [loading]);

    useEffect(() => {
        if (!categoryOpen) {
            setCategoryOptions([]);
        }
        // if (!spellOpen){
        //     setSpellOptions([])
        // }
    }, [categoryOpen,spellOpen]);

    const sortSpells=(cat)=>{

        let spellsTab =[];
        spells.forEach((spell)=>{
            if (spell.type===cat){
                spellsTab.push(spell);
            }
        });
        setSpellOptions(spellsTab);

    };

    useEffect(() => {
        // setSpellValue(spellOption[0])
    }, [props.character.spell]);
    useEffect(() => {
    }, []);

    const  addSpell= async ()=>{
        let character=props.character;
        let spellTable = props.character.spell;

        let check = false;
        spells.forEach((sp)=>{
            if (sp.name.indexOf(spellValue)!==-1){
                check=true;
                spellTable.push({
                    name:sp.name,
                    magicPower:sp.reqPower,
                    castTime:sp.castingTime,
                    ingredient:sp.ingredient,
                    description:sp.description
                });
            }
        });

        character={
            ...character,
            spell:spellTable
        };
        if (check) {
            await API.post("/user/sheet/add", character).then((response) => {
                const res = response.data;
                props.update();
                props.close();
            });
        }
    };
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
            <DialogTitle id="alert-dialog-slide-title">{"Edycja zaklęć w użyciu"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Autocomplete

                            id="asynchronousSpellCat"
                            // style={{ width: 300 }}
                            open={categoryOpen}
                            // value={info.currentProfession}
                            disableClearable={true}
                            getOptionLabel={(option) => option}
                            onChange={((event, newValue) => {

                                sortSpells(newValue);
                                // setInfo({...info, currentProfession: newValue});
                                setUnlockSpell(true);
                                setSaveButton(false);
                                setSpellValue("")



                            })}
                            onOpen={() => {
                                setCategoryOpen(true);
                            }}
                            onClose={() => {
                                setCategoryOpen(false);
                            }}
                            // getOptionSelected={(option, value) => option.name === value.name}
                            options={categoryOptions}
                            loading={loading}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Kategoria"
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
                    <Grid item xs={6}>
                        <Autocomplete

                            id="asynchronousSpells"
                            // style={{ width: 300 }}

                            open={spellOpen}
                            value={spellValue|| ""}

                            disabled={!unlockSpell}
                            disableClearable={true}
                            options={spellOption.map(option=>option.name)}

                            // getOptionLabel={(option) => option.name}
                            onChange={((event, newValue) => {
                                setSpellValue(newValue);
                                // setInfo({...info, currentProfession: newValue});
                                setSaveButton(true);

                            })}
                            onOpen={() => {
                                setSpellOpen(true);
                            }}
                            onClose={() => {
                                setSpellOpen(false);
                            }}
                            getOptionSelected={(option,value) => value===""|| value===spellValue}
                            // loading={loading}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Zaklęcia"
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
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Zamknij
                </SaveButton>
                <SaveButton onClick={addSpell} color="primary" disabled={!saveButton}>
                    Dodaj
                </SaveButton>

            </DialogActions>

        </Dialog>
    )

}