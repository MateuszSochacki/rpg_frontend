import React from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../styles/Styles";

export default function EditSecondTraits(props) {

    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAttack" label="Atak:" defaultValue={props.secondaryTraits.traits.secondaryTraits.attack} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAttackPlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.attack} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentAttack" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.attack} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroHealth" label="Życie:" defaultValue={props.secondaryTraits.traits.secondaryTraits.health} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroHealthPlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.health} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentHealth" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.health} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroStrength" label="Siła:" defaultValue={props.secondaryTraits.traits.secondaryTraits.strength} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroStrengthPlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.strength} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentStrength" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.strength} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroEndurance" label="Wytrzymałość:" defaultValue={props.secondaryTraits.traits.secondaryTraits.endurance} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroEndurancePlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.endurance} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentEndurance" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.endurance} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroSpeed" label="Szybkość:" defaultValue={props.secondaryTraits.traits.secondaryTraits.speed} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroSpeedPlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.speed} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentSpeed" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.speed} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagic" label="Magia:" defaultValue={props.secondaryTraits.traits.secondaryTraits.magic} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagicPlan" label="Plan Rozwoju" defaultValue={props.secondaryTraits.heroProfession.secondaryTraits.magic} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagicShooting" label="Aktualnie:" defaultValue={props.secondaryTraits.traits.currentSecondaryTraits.magic} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroInsanity" label="Obłęd:" defaultValue={props.secondaryTraits.traits.secondaryTraits.insanity} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFatePoints" label="Przeznaczenie:" defaultValue={props.secondaryTraits.traits.secondaryTraits.fatePoints} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                </Grid>

            </Grid>


        </>
    )

}