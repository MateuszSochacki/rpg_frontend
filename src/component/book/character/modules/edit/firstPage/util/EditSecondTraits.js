import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../styles/expansionPanel/Panel";
import {AddButton} from "../../../../../../styles/Styles";

export default function EditSecondTraits(props) {

    const [changedProfessionTraitsState, setChangedProfessionTraitsState] = useState(props.secondaryTraits.heroProfession.secondaryTraits);
    const [currentHeroTraitsState, setCurrentHeroTraitsState] = useState(props.secondaryTraits.traits.currentSecondaryTraits);
    const [buttons, setButtons] = useState({
        attackMinus: true,
        attackPlus: false,
        healthMinus: true,
        healthPlus: false,
        strengthMinus: true,
        strengthPlus: false,
        enduranceMinus: true,
        endurancePlus: false,
        speedMinus: true,
        speedPlus: false,
        magicMinus: true,
        magicPlus: false,
    });

    const [currentExp, setCurrentExp] = useState(props.current);

    useEffect(() => {
        let btn = buttons;
        const baseTraits = props.secondaryTraits.heroProfession.secondaryTraits;


        if (parseInt(props.secondaryTraits.experiencePoints.current) >= 100) {
            if (parseInt(baseTraits.attack) === 0)
                btn = {...btn, attackPlus: true};
            if (parseInt(baseTraits.health) === 0)
                btn = {...btn, healthPlus: true};
            if (parseInt(baseTraits.strength) === 0)
                btn = {...btn, strengthPlus: true};
            if (parseInt(baseTraits.endurance) === 0)
                btn = {...btn, endurancePlus: true};
            if (parseInt(baseTraits.speed) === 0)
                btn = {...btn, speedPlus: true};
            if (parseInt(baseTraits.magic) === 0)
                btn = {...btn, magicPlus: true};


            setButtons(btn);
        } else {
            const btn = {
                attackMinus: true,
                attackPlus: true,
                healthMinus: true,
                healthPlus: true,
                strengthMinus: true,
                strengthPlus: true,
                enduranceMinus: true,
                endurancePlus: true,
                speedMinus: true,
                speedPlus: true,
                magicMinus: true,
                magicPlus: true,
            };
            setButtons(btn);
        }


    }, []);

    const blockAllbutton = (exp, btn) => {
        if (parseInt(exp) < 100) {
            const buttton = {
                ...btn,
                attackPlus: true,
                healthPlus: true,
                strengthPlus: true,
                endurancePlus: true,
                speedPlus: true,
                magicPlus: true,
            };
            setButtons(buttton)
        }
        setCurrentExp(exp);

    };

    const handleButtonsMinus = (name, counterBtn, baseT, changedT, changedTraits) => {
        let btn = buttons;
        if (parseInt(baseT + 1) === parseInt(changedT)) {
            btn = {...btn, [name]: true};
        } else {
            btn = {...btn, [name]: false};
        }
        const exp = currentExp + 100;
        props.onExpChange(exp);
        const baseTraits = changedTraits;
        if (parseInt(baseTraits.attack) === 0) {
            btn = {...btn, attackPlus: true};
        } else {
            btn = {...btn, attackPlus: false};
        }
        if (parseInt(baseTraits.health) === 0) {
            btn = {...btn, healthPlus: true};
        } else {
            btn = {...btn, healthPlus: false};
        }
        if (parseInt(baseTraits.strength) === 0) {
            btn = {...btn, strengthPlus: true};
        } else {
            btn = {...btn, strengthPlus: false};
        }
        if (parseInt(baseTraits.endurance) === 0) {
            btn = {...btn, endurancePlus: true};
        } else {
            btn = {...btn, endurancePlus: false};
        }
        if (parseInt(baseTraits.speed) === 0) {
            btn = {...btn, speedPlus: true};
        } else {
            btn = {...btn, speedPlus: false};
        }
        if (parseInt(baseTraits.magic) === 0) {
            btn = {...btn, magicPlus: true};
        } else {
            btn = {...btn, magicPlus: false};
        }

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
        props.onExpChange(exp);

        setButtons(btn);
        blockAllbutton(exp, btn, trait);

    };

    const handleButton = (btn, name, trait, currentTrait, baseTraits) => {
        let changedTraits = changedProfessionTraitsState;
        let currentHeroTraits = currentHeroTraitsState;
        if (btn === "-") {

            changedTraits = {...changedTraits, [name]: parseInt(trait) + 1};

            currentHeroTraits = {...currentHeroTraits, [name]: parseInt(currentTrait) - 1};
            setChangedProfessionTraitsState(changedTraits);
            setCurrentHeroTraitsState(currentHeroTraits);

            handleButtonsMinus(name + "Minus", name + "Plus", trait, baseTraits, changedTraits);
        } else if (btn === "+") {

            const afterBtnTrait = trait - 1;

            changedTraits = {...changedTraits, [name]: (parseInt(trait) - 1)};

            currentHeroTraits = {...currentHeroTraits, [name]: (parseInt(currentTrait) + 1)};
            setChangedProfessionTraitsState(changedTraits);
            setCurrentHeroTraitsState(currentHeroTraits);
            handleButtonsPlus(name + "Plus", name + "Minus", afterBtnTrait);

        }

    };


    return (
        <>
            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAttack" label="Atak:"
                                       value={props.secondaryTraits.traits.secondaryTraits.attack}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.attackMinus}
                               onClick={() => handleButton("-",
                                   "attack",
                                   changedProfessionTraitsState.attack,
                                   currentHeroTraitsState.attack,
                                   props.secondaryTraits.heroProfession.secondaryTraits.attack)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroAttackPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.attack}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.attackPlus}
                               onClick={() => handleButton("+",
                                   "attack",
                                   changedProfessionTraitsState.attack,
                                   currentHeroTraitsState.attack)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentAttack" label="Aktualnie:"
                                       value={currentHeroTraitsState.attack}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>


            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroHealth" label="Życie:"
                                       value={props.secondaryTraits.traits.secondaryTraits.health}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.healthMinus}
                               onClick={() => handleButton("-",
                                   "health",
                                   changedProfessionTraitsState.health,
                                   currentHeroTraitsState.health,
                                   props.secondaryTraits.heroProfession.secondaryTraits.health)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroHealthPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.health}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.healthPlus}
                               onClick={() => handleButton("+",
                                   "health",
                                   changedProfessionTraitsState.health,
                                   currentHeroTraitsState.health)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentHealth" label="Aktualnie:"
                                       value={currentHeroTraitsState.health}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroStrength" label="Siła:"
                                       value={props.secondaryTraits.traits.secondaryTraits.strength}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.strengthMinus}
                               onClick={() => handleButton("-",
                                   "strength",
                                   changedProfessionTraitsState.strength,
                                   currentHeroTraitsState.strength,
                                   props.secondaryTraits.heroProfession.secondaryTraits.strength)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroStrengthPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.strength}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.strengthPlus}
                               onClick={() => handleButton("+",
                                   "strength",
                                   changedProfessionTraitsState.strength,
                                   currentHeroTraitsState.strength)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentStrength" label="Aktualnie:"
                                       value={currentHeroTraitsState.strength}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

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
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.enduranceMinus}
                               onClick={() => handleButton("-",
                                   "endurance",
                                   changedProfessionTraitsState.endurance,
                                   currentHeroTraitsState.endurance,
                                   props.secondaryTraits.heroProfession.secondaryTraits.endurance)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroEndurancePlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.endurance}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.endurancePlus}
                               onClick={() => handleButton("+",
                                   "endurance",
                                   changedProfessionTraitsState.endurance,
                                   currentHeroTraitsState.endurance)}>

                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentEndurance" label="Aktualnie:"
                                       value={currentHeroTraitsState.endurance}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroSpeed" label="Szybkość:"
                                       value={props.secondaryTraits.traits.secondaryTraits.speed}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.speedMinus}
                               onClick={() => handleButton("-",
                                   "speed",
                                   changedProfessionTraitsState.speed,
                                   currentHeroTraitsState.speed,
                                   props.secondaryTraits.heroProfession.secondaryTraits.speed)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroSpeedPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.speed}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.speedPlus}
                               onClick={() => handleButton("+",
                                   "speed",
                                   changedProfessionTraitsState.speed,
                                   currentHeroTraitsState.speed)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroCurrentSpeed" label="Aktualnie:"
                                       value={currentHeroTraitsState.speed}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
            </Grid>

            <Grid container direction={"row"} justify="center"
                  alignItems="center">
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagic" label="Magia:"
                                       value={props.secondaryTraits.traits.secondaryTraits.magic}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.magicMinus}
                               onClick={() => handleButton("-",
                                   "magic",
                                   changedProfessionTraitsState.magic,
                                   currentHeroTraitsState.magic,
                                   props.secondaryTraits.heroProfession.secondaryTraits.magic)}>
                        -
                    </AddButton>
                </Grid>
                <Grid item xs={4}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagicPlan" label="Plan Rozwoju"
                                       value={changedProfessionTraitsState.magic}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <AddButton variant="contained" color="primary"
                               disabled={buttons.magicPlus}
                               onClick={() => handleButton("+",
                                   "magic",
                                   changedProfessionTraitsState.magic,
                                   currentHeroTraitsState.magic)}>
                        +
                    </AddButton>
                </Grid>
                <Grid item xs={3}>
                    <Grid container item xs={12} direction={"column"}>
                        <HeroTextField id="heroMagicShooting" label="Aktualnie:"
                                       value={currentHeroTraitsState.magic}
                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

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