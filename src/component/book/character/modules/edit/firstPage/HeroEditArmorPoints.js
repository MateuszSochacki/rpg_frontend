import React, {useState} from "react";
import {
    HeroMiniField,
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Silhouette from './../../../../../util/img/charsheet1.png';
import Typography from "@material-ui/core/Typography";
import API from "../../../../../API/API";
import {SaveButton} from "../../../../../styles/Styles";

const useStyles = makeStyles((theme) => ({
    miniText: {
        fontSize: 11
    },

}));
export default function HeroEditArmorPoints(props) {

    const classes = useStyles();
    const [info, setInfo] = useState({
        head: props.character.armorPoints.head,
        body: props.character.armorPoints.body,
        leftHand: props.character.armorPoints.leftHand,
        leftLeg: props.character.armorPoints.leftLeg,
        rightHand: props.character.armorPoints.rightHand,
        rightLeg: props.character.armorPoints.rightLeg

    });
    const [saveButton, setSaveButton] = React.useState(false);
    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges = () => {
        setInfo({
            head: props.character.armorPoints.head,
            body: props.character.armorPoints.body,
            leftHand: props.character.armorPoints.leftHand,
            leftLeg: props.character.armorPoints.leftLeg,
            rightHand: props.character.armorPoints.rightHand,
            rightLeg: props.character.armorPoints.rightLeg
        });
        setSaveButton(false)
    };
    const saveCharacterInfo = async () => {
        const armorP = {
            head: info.head,
            body: info.body,
            leftHand: info.leftHand,
            leftLeg: info.leftLeg,
            rightHand: info.rightHand,
            rightLeg: info.rightLeg
        };
        let character = props.character;
        character.armorPoints = armorP;


        await API.post("/user/sheet/add", character).then((response) => {
            const res = response.data;
            setInfo(res.armorPoints);
            setSaveButton(false);
            props.update()
        })

    };

    return (
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText align={"center"}>
                            Punkty zbroi
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>

                            <Grid container>
                                <Grid container direction={"row"} alignItems={"center"}>
                                    <Grid item xs={3} style={{height: "100%"}}>
                                        <Grid container direction={"column"} justify="space-between"
                                              alignItems={"center"} style={{height: "100%"}}>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Głowa</Typography>
                                                <HeroMiniField align={"center"} id="head" value={info.head}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("head")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>01-15</Typography>
                                            </Grid>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Prawa ręka</Typography>
                                                <HeroMiniField align={"center"} id="rightHand" value={info.rightHand}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("rightHand")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>16-35</Typography>
                                            </Grid>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Prawa noga</Typography>
                                                <HeroMiniField align={"center"} id="rightLeg" value={info.rightLeg}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("rightLeg")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>81-90</Typography>
                                            </Grid>

                                        </Grid>


                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={Silhouette} alt={""} width={"100%"}/>
                                    </Grid>
                                    <Grid item xs={3} style={{height: "100%"}}>
                                        <Grid container direction={"column"} justify={"space-between"}
                                              alignItems={"center"} style={{height: "100%"}}>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Korpus</Typography>
                                                <HeroMiniField align={"center"} id="body" value={info.body}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("body")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>56-80</Typography>
                                            </Grid>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Lewa ręka</Typography>
                                                <HeroMiniField align={"center"} id="leftHand" value={info.leftHand}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("leftHand")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>36-55</Typography>
                                            </Grid>
                                            <Grid item xs={4} style={{flexBasis: 0, maxWidth: "100%"}}>
                                                <Typography className={classes.miniText}>Lewa noga</Typography>
                                                <HeroMiniField align={"center"} id="leftLeg" value={info.leftLeg}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}
                                                               onChange={handleChange("leftLeg")}
                                                               type={"number"}> </HeroMiniField>
                                                <Typography className={classes.miniText}>91-00</Typography>
                                            </Grid>

                                        </Grid>

                                    </Grid>


                                </Grid>
                                {saveButton ?
                                    <>
                                        <SaveButton variant="contained" onClick={revertChanges}>
                                            Anuluj
                                        </SaveButton>
                                        <SaveButton variant="contained" color="primary" onClick={saveCharacterInfo}>
                                            Zapisz
                                        </SaveButton>
                                    </>
                                    : <></>}
                            </Grid>


                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}