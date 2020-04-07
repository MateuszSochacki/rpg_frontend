import React from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../styles/Styles";

export default function EditTraitsDialog(props) {

    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFighting" label="Walka Wręcz:" defaultValue={props.mainTraits.traits.mainTraits.fighting} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFightingPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.fighting} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentFighting" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.fighting} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroShooting" label="Umiejętności Strzeleckie:" defaultValue={props.mainTraits.traits.mainTraits.shooting} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroShootingPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.shooting} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentShooting" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.shooting} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroVigor" label="Krzepa:" defaultValue={props.mainTraits.traits.mainTraits.vigor} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroVigorPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.vigor} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentVigor" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.vigor} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroResistance" label="Odporność:" defaultValue={props.mainTraits.traits.mainTraits.resistance} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroResistancePlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.resistance} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentResistance" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.resistance} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAgility" label="Zręczność:" defaultValue={props.mainTraits.traits.mainTraits.agility} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAgilityPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.agility} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentAgility" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.agility} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligence" label="Inteligencja:" defaultValue={props.mainTraits.traits.mainTraits.intelligence} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligencePlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.intelligence} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligenceShooting" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.intelligence} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroWillpower" label="Siła Woli:" defaultValue={props.mainTraits.traits.mainTraits.willpower} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroWillpowerPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.willpower} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentWillpower" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.willpower} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCharisma" label="Charyzma:" defaultValue={props.mainTraits.traits.mainTraits.charisma} inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCharismaPlan" label="Plan Rozwoju" defaultValue={props.mainTraits.heroProfession.mainTraits.charisma} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary">
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentCharisma" label="Aktualnie:" defaultValue={props.mainTraits.traits.currentMainTraits.charisma} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>


        </>
    )

}