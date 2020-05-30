import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {HeroSkillsLetters, SaveButton} from "../../../../../styles/Styles";
import EditWeaponDialog from "../firstPage/util/weapon/EditWeaponDialog";
import EditEquipmentDialog from "../firstPage/util/eq/EditEquipmentDialog";
import API from "../../../../../API/API";

export default function HeroEditEquipment(props) {

    const [open, setOpen] = React.useState(false);
    const [equipment, setEquipment] = useState([]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        let didCancel = false;

        async function fetchEq(name) {
            let eq = "";

            await API.post("book/equipment/name", {name}).then(async (response) => {

                if (!didCancel) {
                    eq = (response.data);


                }
            }).catch(error => {
                console.log(error)
            });
            return eq;

        };

        async function getAll() {
            return (await Promise.all(props.character.equipment.map(async (eq) => await (await (fetchEq(eq.name))))));
        }

        getAll().then(data => {
            if(!didCancel) {
                setEquipment(data);

            }

        });
        return () => {
            didCancel = true;


        };

    }, [props.character.equipment]);
    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            wyposażenie
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid container direction={"column"}>
                                <Grid container direction={"row"}>
                                    <Grid item xs={4}>

                                        <HeroSkillsLetters><b>Przedmiot</b></HeroSkillsLetters>
                                        <br/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroSkillsLetters><b>Obc.</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <HeroSkillsLetters><b>Kategoria</b></HeroSkillsLetters>
                                        <br/>
                                    </Grid>
                                </Grid>
                                {props.character.equipment.map((eq, key) => (

                                        <Grid container direction={"row"} key={key} spacing={2} style={{paddingBottom:"26px"}}>
                                            <Grid item xs={4}>

                                                <HeroTextField inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               value={eq.name}/>

                                            </Grid>
                                            <Grid item xs={2}>
                                                <HeroTextField inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               value={eq.weight}/>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <HeroTextField inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               value={eq.type} multiline
                                                />
                                            </Grid>


                                        </Grid>

                                ))}

                            </Grid>
                            <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                Edytuj
                            </SaveButton>

                        </Grid>
                    </HeroPanelDetails>
                    {open ?
                        <EditEquipmentDialog open={open} close={handleClose} character={props.character} eq={equipment} update={props.update}/>
                        :null}
                </HeroPanel>
            </Paper>
        </>
    )

}