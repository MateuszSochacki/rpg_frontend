import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText, HeroTextField,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {SaveButton, ArmoryButton} from "../../../../../styles/Styles";
import API from "../../../../../API/API";

export default function HeroEditMoney(props) {

    const [money, setMoney] = useState({
        gold: parseInt(props.character.money.gold),
        silver: parseInt(props.character.money.silver),
        copper: parseInt(props.character.money.copper),
    });

    const [kToSButton, setkToSButton] = useState(false);
    const [sToKButton, setsToKButton] = useState(false);
    const [pToSButton, setpToSButton] = useState(false);
    const [sToPButton, setsToPButton] = useState(false);
    const [saveButton, setSaveButton] = useState(false);

    const changeCurrency = (curr) => {

        if (curr === "KS")
            changeKtoS();
        if (curr === "SK")
            changeStoK();
        if (curr === "SP")
            changeStoP();
        if (curr === "PS")
            changePtoS();

        setSaveButton(true);
    };

    const changeKtoS = () => {
        if (money.gold >= 1) {
            let gold = parseInt(money.gold);
            let silver = parseInt(money.silver);
            gold--;
            silver += 20;
            setMoney({
                ...money,
                gold: gold,
                silver: silver
            })
        } else
            setkToSButton(true);
    };
    const changeStoK = () => {
        if (money.silver >= 20) {
            let gold = parseInt(money.gold);
            let silver = parseInt(money.silver);
            gold++;
            silver -= 20;
            setMoney({
                ...money,
                gold: gold,
                silver: silver
            })
        } else
            setsToKButton(true);
    };
    const changeStoP = () => {
        if (money.silver >= 1) {
            let copper = parseInt(money.copper);
            let silver = parseInt(money.silver);
            copper += 12;
            silver--;
            setMoney({
                ...money,
                silver: silver,
                copper: copper
            })
        } else
            setsToPButton(true);
    };
    const changePtoS = () => {
        if (money.copper >= 12) {
            let silver = parseInt(money.silver);
            let copper = parseInt(money.copper);
            silver++;
            copper -= 12;
            setMoney({
                ...money,
                silver: silver,
                copper: copper
            })
        } else
            setpToSButton(true);
    }

    const saveMoney = async () => {
        let chara = props.character;
        chara={...chara,
        money:money};

        await API.post("/user/sheet/add", chara).then((response) => {
            const res = response.data;
            props.update();
        });
        setSaveButton(false);


    };
    const handleChange = name => event => {
        setMoney({...money, [name]: parseInt(event.target.value)});
        setSaveButton(true);

    };
    useEffect(() => {
        if (money.gold > 0) {
            setkToSButton(false);
        } else {
            setkToSButton(true);
        }

        if (money.silver >= 20) {
            setsToKButton(false);
        } else {
            setsToKButton(true);
        }
        if (money.silver > 0) {

            setsToPButton(false);


        } else {
            setsToPButton(true);
        }

        if (money.copper >= 12) {
            setpToSButton(false);
        } else {
            setpToSButton(true);
        }


    }, [money]);
    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Pieniądze
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container direction={"row"}>
                            <Grid container direction={"column"}>
                                <Grid item xs={12}>
                                    <HeroTextField style={{borderBottom: "1px solid"}}
                                                   inputProps={{min: 0, style: {textAlign: "center"}}} id="gold"
                                                   label="Złote korony (zk):" value={money.gold}
                                                   onChange={handleChange("gold")} type={"number"}/>
                                    <HeroTextField style={{borderBottom: "1px solid"}}
                                                   inputProps={{min: 0, style: {textAlign: "center"}}} id="silver"
                                                   label="Srebrne szylingi (s)" value={money.silver} type={"number"}
                                                   onChange={handleChange("silver")}/>
                                    <HeroTextField id="copper" inputProps={{min: 0, style: {textAlign: "center"}}}
                                                   label="Mosiężne pensy (p):" value={money.copper} type={"number"}
                                                   onChange={handleChange("copper")}/>


                                </Grid>
                            </Grid>

                            <Grid container justify="center"
                                  alignItems="center">
                                <Grid item xs={4}>
                                    <ArmoryButton variant="contained" color="primary" disabled={kToSButton}
                                                  onClick={() => {
                                                      changeCurrency("KS")
                                                  }}>
                                        Korony -> Szylingi
                                    </ArmoryButton>
                                    <ArmoryButton variant="contained" color="primary" disabled={sToKButton}
                                                  onClick={() => {
                                                      changeCurrency("SK")
                                                  }}>
                                        Korony {`<`}- szylingi
                                    </ArmoryButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <ArmoryButton variant="contained" color="primary" disabled={sToPButton}
                                                  onClick={() => {
                                                      changeCurrency("SP")
                                                  }}>
                                        Szylingi -> Pensy
                                    </ArmoryButton>
                                    <ArmoryButton variant="contained" color="primary" disabled={pToSButton}
                                                  onClick={() => {
                                                      changeCurrency("PS")
                                                  }}>
                                        Szylingi {`<`}- Pensy
                                    </ArmoryButton>
                                </Grid>
                                <Grid item xs={4}>
                                    {saveButton ?
                                        <SaveButton variant="contained" color="primary" onClick={saveMoney}>
                                            Zapisz
                                        </SaveButton>
                                        : null}
                                </Grid>
                            </Grid>


                        </Grid>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}