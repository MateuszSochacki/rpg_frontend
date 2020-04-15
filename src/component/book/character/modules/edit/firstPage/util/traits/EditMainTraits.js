import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../../styles/Styles";
import {fade} from "@material-ui/core";


export default function EditTraitsDialog(props) {

    const [changedProfessionTraitsState, setChangedProfessionTraitsState] = useState(props.mainTraits.heroProfession.mainTraits);
    const [currentHeroTraitsState, setCurrentHeroTraitsState] = useState(props.mainTraits.traits.currentMainTraits);
    const [buttons, setButtons] = useState({
        fightingMinus: true,
        fightingPlus: false,
        shootingMinus: true,
        shootingPlus: false,
        vigorMinus: true,
        vigorPlus: false,
        resistanceMinus: true,
        resistancePlus: false,
        agilityMinus: true,
        agilityPlus: false,
        intelligenceMinus: true,
        intelligencePlus: false,
        willpowerMinus: true,
        willpowerPlus: false,
        charismaMinus: true,
        charismaPlus: false
    });
    const [currentExp, setCurrentExp] = useState(props.current);



    useEffect(() => {
        let btn = buttons;
        const baseTraits = changedProfessionTraitsState;


        if (parseInt(props.current) >= 100) {
            if ((baseTraits.fighting === "0" || baseTraits.fighting === 0)) {
                btn = {...btn, fightingPlus: true};

            } else {
                btn = {...btn, fightingPlus: false};
            }
            if (baseTraits.shooting === "0" || baseTraits.shooting === 0) {
                btn = {...btn, shootingPlus: true};
            } else {
                btn = {...btn, shootingPlus: false};
            }
            if (baseTraits.vigor === "0" || baseTraits.vigor === 0) {
                btn = {...btn, vigorPlus: true};
            } else {
                btn = {...btn, vigorPlus: false};
            }
            if (baseTraits.resistance === "0" || baseTraits.resistance === 0) {
                btn = {...btn, resistancePlus: true};
            } else {
                btn = {...btn, resistancePlus: false};
            }
            if (baseTraits.agility === "0" || baseTraits.agility === 0) {
                btn = {...btn, agilityPlus: true};
            } else {
                btn = {...btn, agilityPlus: false};
            }
            if (baseTraits.intelligence === "0" || baseTraits.intelligence === 0) {
                btn = {...btn, intelligencePlus: true};
            } else {
                btn = {...btn, intelligencePlus: false};
            }
            if (baseTraits.willpower === "0" || baseTraits.willpower === 0) {
                btn = {...btn, willpowerPlus: true};
            } else {
                btn = {...btn, willpowerPlus: false};
            }
            if (baseTraits.charisma === "0" || baseTraits.charisma === 0) {
                btn = {...btn, charismaPlus: true};
            } else {
                btn = {...btn, charismaPlus: false};
            }

            setButtons(btn);
        } else {
            btn = {
                ...btn,
                fightingPlus: true,
                shootingPlus: true,
                vigorPlus: true,
                resistancePlus: true,
                agilityPlus: true,
                intelligencePlus: true,
                willpowerPlus: true,
                charismaPlus: true
            };
            setButtons(btn);
        }


    }, [props.current]);

    const blockAllbutton = (exp, btn) => {
        if (parseInt(exp) < 100) {
            const buttton = {
                ...btn,
                fightingPlus: true,
                shootingPlus: true,
                vigorPlus: true,
                resistancePlus: true,
                agilityPlus: true,
                intelligencePlus: true,
                willpowerPlus: true,
                charismaPlus: true
            };
            setButtons(buttton)
        }
        setCurrentExp(exp);

    };
    const handleButtonsMinus = (name, counterBtn, baseT, changedT, changedTraits) => {
        let btn = buttons;
        // btn = {...btn, [counterBtn]: false};
        if (parseInt(baseT + 5) === parseInt(changedT)) {
            btn = {...btn, [name]: true};
            // return true;

        } else {
            btn = {...btn, [name]: false};
        }
        const exp = currentExp + 100;
        props.expChangeSubsract();

        // const baseTraits = changedTraits;
        //
        // if ((baseTraits.fighting === "0" || baseTraits.fighting === 0)) {
        //     btn = {...btn, fightingPlus: true};
        //
        // } else {
        //     btn = {...btn, fightingPlus: false};
        // }
        // if (baseTraits.shooting === "0" || baseTraits.shooting === 0) {
        //     btn = {...btn, shootingPlus: true};
        // } else {
        //     btn = {...btn, shootingPlus: false};
        // }
        // if (baseTraits.vigor === "0" || baseTraits.vigor === 0) {
        //     btn = {...btn, vigorPlus: true};
        // } else {
        //     btn = {...btn, vigorPlus: false};
        // }
        // if (baseTraits.resistance === "0" || baseTraits.resistance === 0) {
        //     btn = {...btn, resistancePlus: true};
        // } else {
        //     btn = {...btn, resistancePlus: false};
        // }
        // if (baseTraits.agility === "0" || baseTraits.agility === 0) {
        //     btn = {...btn, agilityPlus: true};
        // } else {
        //     btn = {...btn, agilityPlus: false};
        // }
        // if (baseTraits.intelligence === "0" || baseTraits.intelligence === 0) {
        //     btn = {...btn, intelligencePlus: true};
        // } else {
        //     btn = {...btn, intelligencePlus: false};
        // }
        // if (baseTraits.willpower === "0" || baseTraits.willpower === 0) {
        //     btn = {...btn, willpowerPlus: true};
        // } else {
        //     btn = {...btn, willpowerPlus: false};
        // }
        // if (baseTraits.charisma === "0" || baseTraits.charisma === 0) {
        //     btn = {...btn, charismaPlus: true};
        // } else {
        //     btn = {...btn, charismaPlus: false};
        // }


        setButtons(btn);
        blockAllbutton(exp, btn);

    };
    const handleButtonsPlus = (name, counterBtn, trait) => {
        let btn = buttons;
        btn = {...btn, [counterBtn]: false};

        if (parseInt(trait) === 0) {
            btn = {...btn, [name]: true};

        } else {
            btn = {...btn, [name]: false};
        }
        const exp = currentExp - 100;
        props.expChangeAdd();

        setButtons(btn);
        blockAllbutton(exp, btn, trait);

    };
    const handleButton = (btn, name, trait, currentTrait, baseTraits) => {
        let changedTraits = changedProfessionTraitsState;
        let currentHeroTraits = currentHeroTraitsState;
        if (btn === "-") {

            changedTraits = {...changedTraits, [name]: parseInt(trait) + 5};

            currentHeroTraits = {...currentHeroTraits, [name]: parseInt(currentTrait) - 5};
            setChangedProfessionTraitsState(changedTraits);
            setCurrentHeroTraitsState(currentHeroTraits);

            handleButtonsMinus(name + "Minus", name + "Plus", trait, baseTraits, changedTraits);
        } else if (btn === "+") {

            const afterBtnTrait = trait - 5;

            changedTraits = {...changedTraits, [name]: (parseInt(trait) - 5)};

            currentHeroTraits = {...currentHeroTraits, [name]: (parseInt(currentTrait) + 5)};
            setChangedProfessionTraitsState(changedTraits);
            setCurrentHeroTraitsState(currentHeroTraits);
            handleButtonsPlus(name + "Plus", name + "Minus", afterBtnTrait);

        }
        // let character=props.mainTraits;
        // character={
        //     ...character,
        //     traits:{...character.traits,
        //         currentMainTraits: changedProfessionTraitsState,
        //         heroProfession: currentHeroTraitsState
        //     }
        //
        // }

        props.editedCharacter(changedTraits,currentHeroTraits)

    };
    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFighting" label="Walka Wręcz:"
                                       value={props.mainTraits.traits.mainTraits.fighting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>

                    <AddButton variant="contained" color="primary"
                               disabled={buttons.fightingMinus}
                               onClick={() => handleButton("-",
                                   "fighting",
                                   changedProfessionTraitsState.fighting,
                                   currentHeroTraitsState.fighting,
                                   props.mainTraits.heroProfession.mainTraits.fighting)}>
                        -
                    </AddButton>

                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroFightingPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.fighting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.fightingPlus}
                               onClick={() => handleButton("+",
                                   "fighting",
                                   changedProfessionTraitsState.fighting,
                                   currentHeroTraitsState.fighting)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentFighting" label="Aktualnie:"
                                       value={currentHeroTraitsState.fighting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroShooting" label="Umiejętności Strzeleckie:"
                                       value={props.mainTraits.traits.mainTraits.shooting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>

                    <AddButton variant="contained" color="primary"
                               disabled={buttons.shootingMinus}
                               onClick={() => handleButton("-",
                                   "shooting",
                                   changedProfessionTraitsState.shooting,
                                   currentHeroTraitsState.shooting,
                                   props.mainTraits.heroProfession.mainTraits.shooting)}>
                        -
                    </AddButton>

                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroShootingPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.shooting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.shootingPlus}
                               onClick={() => handleButton("+",
                                   "shooting",
                                   changedProfessionTraitsState.shooting,
                                   currentHeroTraitsState.shooting)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentShooting" label="Aktualnie:"
                                       value={currentHeroTraitsState.shooting}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroVigor" label="Krzepa:"
                                       value={props.mainTraits.traits.mainTraits.vigor}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.vigorMinus}
                               onClick={() => handleButton("-",
                                   "vigor",
                                   changedProfessionTraitsState.vigor,
                                   currentHeroTraitsState.vigor,
                                   props.mainTraits.heroProfession.mainTraits.vigor)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroVigorPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.vigor}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.vigorPlus}
                               onClick={() => handleButton("+",
                                   "vigor",
                                   changedProfessionTraitsState.vigor,
                                   currentHeroTraitsState.vigor)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentVigor" label="Aktualnie:"
                                       value={currentHeroTraitsState.vigor}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroResistance" label="Odporność:"
                                       value={props.mainTraits.traits.mainTraits.resistance}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.resistanceMinus}
                               onClick={() => handleButton("-",
                                   "resistance",
                                   changedProfessionTraitsState.resistance,
                                   currentHeroTraitsState.resistance,
                                   props.mainTraits.heroProfession.mainTraits.resistance)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroResistancePlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.resistance}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.resistancePlus}
                               onClick={() => handleButton("+",
                                   "resistance",
                                   changedProfessionTraitsState.resistance,
                                   currentHeroTraitsState.resistance)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentResistance" label="Aktualnie:"
                                       value={currentHeroTraitsState.resistance}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAgility" label="Zręczność:"
                                       value={props.mainTraits.traits.mainTraits.agility}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.agilityMinus}
                               onClick={() => handleButton("-",
                                   "agility",
                                   changedProfessionTraitsState.agility,
                                   currentHeroTraitsState.agility,
                                   props.mainTraits.heroProfession.mainTraits.agility)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAgilityPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.agility}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.agilityPlus}
                               onClick={() => handleButton("+",
                                   "agility",
                                   changedProfessionTraitsState.agility,
                                   currentHeroTraitsState.agility)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentAgility" label="Aktualnie:"
                                       value={currentHeroTraitsState.agility}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligence" label="Inteligencja:"
                                       value={props.mainTraits.traits.mainTraits.intelligence}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.intelligenceMinus}
                               onClick={() => handleButton("-",
                                   "intelligence",
                                   changedProfessionTraitsState.intelligence,
                                   currentHeroTraitsState.intelligence,
                                   props.mainTraits.heroProfession.mainTraits.intelligence)}>

                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligencePlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.intelligence}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.intelligencePlus}
                               onClick={() => handleButton("+",
                                   "intelligence",
                                   changedProfessionTraitsState.intelligence,
                                   currentHeroTraitsState.intelligence)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroIntelligenceShooting" label="Aktualnie:"
                                       value={currentHeroTraitsState.intelligence}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroWillpower" label="Siła Woli:"
                                       value={props.mainTraits.traits.mainTraits.willpower}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.willpowerMinus}
                               onClick={() => handleButton("-",
                                   "willpower",
                                   changedProfessionTraitsState.willpower,
                                   currentHeroTraitsState.willpower,
                                   props.mainTraits.heroProfession.mainTraits.willpower)}>

                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroWillpowerPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.willpower}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.willpowerPlus}
                               onClick={() => handleButton("+",
                                   "willpower",
                                   changedProfessionTraitsState.willpower,
                                   currentHeroTraitsState.willpower)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentWillpower" label="Aktualnie:"
                                       value={currentHeroTraitsState.willpower}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCharisma" label="Charyzma:"
                                       value={props.mainTraits.traits.mainTraits.charisma}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.charismaMinus}
                               onClick={() => handleButton("-",
                                   "charisma",
                                   changedProfessionTraitsState.charisma,
                                   currentHeroTraitsState.charisma,
                                   props.mainTraits.heroProfession.mainTraits.charisma)}>

                        -
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCharismaPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.charisma}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.charismaPlus}
                               onClick={() => handleButton("+",
                                   "charisma",
                                   changedProfessionTraitsState.charisma,
                                   currentHeroTraitsState.charisma)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentCharisma" label="Aktualnie:"
                                       value={currentHeroTraitsState.charisma}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}/>
            </Grid>


        </>
    )

}