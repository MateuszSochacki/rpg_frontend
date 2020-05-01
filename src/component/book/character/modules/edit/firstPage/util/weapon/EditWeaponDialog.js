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
import AddNewWeapon from "./AddNewWeapon";
import AddLootedWeapon from "./AddLootedWeapon";
import NegotationWeapoon from "./NegotationWeapon";
import API from "../../../../../../../API/API";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditWeaponDialog(props) {

    const [weapon, setWeapon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = React.useState({
        buy:false,
        loot:false,
        negotation:false
    });
    const [money, setMoney] = React.useState(null);



        const handleClickOpen = (name,price) => {
        if (price!==null){
            setMoney(price);
        }else{
            setMoney(null)
        }
        setOpen({[name]:true});

        };

    const handleClose= (name) => {
        setOpen({[name]:false});

    };

    useEffect(() => {
        let didCancel = false;

        async function fetchWeapons() {
            await API.get("book/weapon/all").then(async (response) => {

                if (!didCancel) {
                    const weapons = response.data;
                    setWeapon(weapons.weapons);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });
        }
        fetchWeapons();
        return () => {
            didCancel = true;
        };
    }, []);

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Edycja broni w użyciu"}</DialogTitle>
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
                    {props.weapons.map((weapon, key) => (
                        <Grid container item xs={12} key={key} spacing={1} justify={"flex-end"} alignItems="center"
                              direction="row" style={{marginBottom: "24px"}}>

                            <Grid item xs={4}>
                                <HeroTextField label={"Broń"} value={weapon.name}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                            </Grid>
                            <Grid item xs={1}>
                                <HeroTextField label={"Waga"} value={weapon.weight}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                            </Grid>
                            <Grid item xs={1}>
                                <HeroTextField label={"Cena"} value={weapon.price}
                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                            </Grid>
                            <Grid item xs={2}/>
                            <Grid item xs={2}>
                                <ArmoryButton variant="contained" color="primary" onClick={()=>handleClickOpen("negotation",weapon.price)}>Sprzedaj</ArmoryButton>

                            </Grid>
                            <Grid item xs={2}>
                                <ArmoryButton variant="contained" color="secondary">Wyrzuć</ArmoryButton>

                            </Grid>

                        </Grid>

                    ))}
                    <Grid container item xs={12}   justify="space-between">
                        <Grid item xs={2}>
                            <SaveButton variant="contained" onClick={()=>handleClickOpen("buy")}>Kup</SaveButton>
                        </Grid>
                        <Grid item xs={2}>
                            <SaveButton variant="contained" onClick={()=>handleClickOpen("loot")} >Łup</SaveButton>

                        </Grid>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Anuluj
                </SaveButton>
                <SaveButton onClick={props.close} color="primary">
                    Zapisz
                </SaveButton>
            </DialogActions>
            {open.buy ?
                <AddNewWeapon open={open.buy} close={()=>handleClose("buy")} character={props.character} weapons={weapon} update={props.update}/>
                : null}
            {open.loot ?
                <AddLootedWeapon open={open.loot} close={()=>handleClose("loot")} character={props.character} weapons={weapon} update={props.update}/>
                : null}
            {open.negotation ?
                <NegotationWeapoon open={open.negotation} close={()=>handleClose("negotation")} howMuch={money} update={props.update}/>
                : null}
        </Dialog>
    )

}