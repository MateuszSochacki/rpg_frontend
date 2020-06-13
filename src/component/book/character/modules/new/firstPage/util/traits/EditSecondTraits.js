import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../../styles/Styles";

export default function EditSecondTraits(props) {

    const [secondaryTraits, setSecondaryTraits] = useState({
        attack: "",
        health: "",
        strength:"",
        endurance:"",
        speed:"",
        magic:"",
        insanity:"",
        fatePoints:"",
    });

    const handleChange = name => event => {
        setSecondaryTraits({...secondaryTraits, [name]: event.target.value});

        // setSaveButton(true);

    };
    const update=()=>{
        props.editedCharacter(secondaryTraits)
    };



    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAttack" label="Atak:"
                                       value={secondaryTraits.attack} onChange={handleChange("attack")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroHealth" label="Życie:"
                                       value={secondaryTraits.health} onChange={handleChange("health")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroStrength" label="Siła:"
                                       value={secondaryTraits.strength} onChange={handleChange("strength")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroEndurance" label="Wytrzymałość:"
                                       defaultValue={secondaryTraits.endurance} onChange={handleChange("endurance")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroSpeed" label="Szybkość:"
                                       value={secondaryTraits.speed} onChange={handleChange("speed")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagic" label="Magia:"
                                       value={secondaryTraits.magic} onChange={handleChange("magic")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">

                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroInsanity" label="Obłęd:" value={secondaryTraits.insanity} onChange={handleChange("insanity")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">

                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFatePoints" label="Przeznaczenie:"
                                       value={secondaryTraits.fatePoints} onChange={handleChange("fatePoints")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>


            </Grid>


        </>
    )

}