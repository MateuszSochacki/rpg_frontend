import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {AddButton, ArmoryButton, SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import {HeroPanel, HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import Button from '@material-ui/core/Button';
import API from "../../../../../../../API/API";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddNewWeapon(props) {

    const [basket, setBasket] = useState([{name: "srututut", price: "5k"}, {name: "trolool", price: "2k"}]);

    useEffect(() => {

    }, []);

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            maxWidth={"md"}
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Kup"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12} justify={"center"} alignItems={"center"} spacing={2}>
                        <Grid item xs={4}>
                            <HeroTextField id="gold" label="Złote korony:" value={props.character.money.gold}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={4}>
                            <HeroTextField id="silver" label="Srebrne szylingi:" value={props.character.money.silver}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={4}>
                            <HeroTextField id="copper" label="Mosiężne pensy:" value={props.character.money.copper}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>


                    </Grid>
                    <Grid container>
                        <Grid item xs={9}>
                            {props.weapons.map((weapon, key) => (
                                <Grid container item xs={12} key={key} spacing={1} justify={"flex-end"}
                                      alignItems="center"
                                      direction="row" style={{marginBottom: 5}}>
                                    <Grid item xs={3}>
                                        <HeroTextField id={"name" + key} label="Nazwa:" value={weapon.name}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroTextField id={"price" + key} label="Cena:" value={weapon.price}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <HeroTextField id={"strength" + key} label="Siła:" value={weapon.strength}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                    </Grid>
                                    <Grid item xs={3}>
                                        <HeroTextField id={"category" + key} label="Kategoria:" value={weapon.category}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <ArmoryButton variant="contained" color="primary">Kup</ArmoryButton>

                                    </Grid>

                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={3}>
                            {basket.map((item, key) => (
                                <Grid container item key={key} spacing={1} justify={"flex-end"}
                                      alignItems="center"
                                      direction="row">
                                    <Grid item xs={6}>
                                        <HeroTextField id={"itemInBasket" + key} label="Broń:" value={item.name}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <HeroTextField id={"priceOfItem" + key} label="Cena:" value={item.price}
                                                       inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ArmoryButton variant="contained" color="primary">Odłóż</ArmoryButton>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Trzasnij drzwiami
                </SaveButton>
                <SaveButton onClick={props.close} color="primary">
                    Kup
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}