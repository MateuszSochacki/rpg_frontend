import React from "react";
import {
    HeroMiniField,
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Silhouette from './../../../util/img/charsheet1.png';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    miniText: {
        fontSize:11
    },

}));
export default function HeroArmorPoints() {
    const classes= useStyles();

    return(
        <>
            <Paper elevation={8}>
                <HeroPanel expanded={true} >
                    <HeroPanelSummary>
                        <HeroText align={"center"} >
                            Punkty zbroi
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <>

                                    <Grid container direction={"row"}  alignItems={"center"} >
                                        <Grid item xs={3} style={{height:"100%"}}>
                                            <Grid container direction={"column"} justify="space-between" alignItems={"center"}  style={{height:"100%"}}>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Głowa</Typography>
                                                    <HeroMiniField align={"center"} id="head" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>01-15</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Prawa ręka</Typography>
                                                    <HeroMiniField align={"center"} id="rightHand" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>16-35</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Prawa noga</Typography>
                                                    <HeroMiniField align={"center"} id="rightLeg" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>81-90</Typography>
                                                </Grid>

                                            </Grid>



                                        </Grid>
                                        <Grid  item xs={6}>
                                            <img src={Silhouette} alt={""}/>
                                        </Grid>
                                        <Grid item xs={3} style={{height:"100%"}}>
                                            <Grid container direction={"column"} justify={"space-between"} alignItems={"center"} style={{height:"100%"}}>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Korpus</Typography>
                                                    <HeroMiniField align={"center"} id="body" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>56-80</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Lewa ręka</Typography>
                                                    <HeroMiniField align={"center"} id="leftHand" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>36-55</Typography>
                                                </Grid>
                                                <Grid item xs={4} style={{flexBasis:0,maxWidth:"100%"}}>
                                                    <Typography className={classes.miniText}>Lewa noga</Typography>
                                                    <HeroMiniField align={"center"} id="leftLeg" value={"2"} inputProps={{min:0,style:{textAlign:"center"} }}> </HeroMiniField>
                                                    <Typography className={classes.miniText}>91-00</Typography>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </Grid>




                        </>
                    </HeroPanelDetails>
                </HeroPanel>
            </Paper>
        </>
    )

}