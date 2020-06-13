import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../../styles/Styles";


export default function EditTraitsDialog(props) {
    //
    // const [changedProfessionTraitsState, setChangedProfessionTraitsState] = useState(props.mainTraits.heroProfession.mainTraits);
    // const [currentHeroTraitsState, setCurrentHeroTraitsState] = useState(props.mainTraits.traits.currentMainTraits);
    const [mainTraits, setMainTraits] = useState({
        fighting: "",
        shooting: "",
        charisma:"",
        vigor:"",
        resistance:"",
        agility:"",
        intelligence:"",
        willpower:"",
    });

    const handleChange = name => event => {
        setMainTraits({...mainTraits, [name]: event.target.value});

        // setSaveButton(true);

    };
    const update=()=>{
        props.editedCharacter(mainTraits)
    }



    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFighting" label="Walka Wręcz:"
                                       value={mainTraits.fighting} onChange={handleChange("fighting")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroShooting" label="Umiejętności Strzeleckie:"
                                       value={mainTraits.shooting} onChange={handleChange("shooting")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroVigor" label="Krzepa:"
                                       value={mainTraits.vigor} onChange={handleChange("vigor")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroResistance" label="Odporność:"
                                       value={mainTraits.resistance} onChange={handleChange("resistance")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAgility" label="Zręczność:"
                                       value={mainTraits.agility} onChange={handleChange("agility")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligence" label="Inteligencja:"
                                       value={mainTraits.intelligence} onChange={handleChange("intelligence")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroWillpower" label="Siła Woli:"
                                       value={mainTraits.willpower} onChange={handleChange("willpower")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCharisma" label="Charyzma:"
                                       value={mainTraits.charisma} onChange={handleChange("charisma")} onBlur={update}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>

            </Grid>


        </>
    )

}