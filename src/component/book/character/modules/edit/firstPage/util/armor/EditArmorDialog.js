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
import AddNewArmor from "./AddNewArmor";
import AddLootedArmor from "./AddLootedArmor";
import NegotationArmor from "./NegotationArmor";
import API from "../../../../../../../API/API";
import DiscardItem from "./DiscardItem";
import CategoryFromList from "../../../../../../books/equipment/CategoryFromList";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditArmorDialog(props) {

    const [armor, setArmor] = useState([]);
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = React.useState({
        buy: false,
        loot: false,
        negotation: false,
        discard: false
    });
    const [item, setItem] = React.useState({
        key: null,
        name: null,
        price: null
    });


    const handleClickOpen = (name, key, wpnName, price) => {
        if (price !== null) {
            setItem({
                key: key,
                name: wpnName,
                price: price
            });
        } else {
            setItem(null)
        }
        setOpen({[name]: true});

    };

    const handleClose = (name) => {
        setOpen({[name]: false});

    };

    useEffect(() => {

        let didCancel = false;

        async function fetchArmors() {
            await API.get("book/armor/all").then(async (response) => {

                if (!didCancel) {
                    const armors = response.data;
                    setArmor(armors.armors);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });
        }

        fetchArmors();
        return () => {
            didCancel = true;
        };
    }, []);
    useEffect(()=>{
        setCategory(CategoryFromList(props.armors));

    },[props.armors]);

    useEffect(()=>{},[props.character.armor]);
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
            <DialogTitle id="alert-dialog-slide-title">{"Edycja pancerzy w użyciu"}</DialogTitle>
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
                    {category.map((cat, catKey) => (
                        <Grid container key={catKey}>
                            <Grid item xs={12}>
                                {cat}
                                {props.armors.map((armor, key) => {
                                    if (armor.type === cat) {
                                        return (

                                            <Grid container item xs={12} key={key} spacing={1} justify={"flex-end"}
                                                  alignItems="center"
                                                  direction="row" style={{marginBottom: "24px"}}>

                                                <Grid item xs={2}>
                                                    <HeroTextField label={"Pancerz"} value={armor.name}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <HeroTextField label={"Lokacja"} value={armor.location}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <HeroTextField label={"Waga"} value={armor.weight}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <HeroTextField label={"Cena"} value={armor.price}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <HeroTextField label={"Ochrona"} value={armor.armorPoints}
                                                                   inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                </Grid>
                                                <Grid item xs={1}/>
                                                <Grid item xs={2}>
                                                    <ArmoryButton variant="contained" color="primary"
                                                                  onClick={() => handleClickOpen("negotation", key, armor.name, armor.price)}>Sprzedaj</ArmoryButton>

                                                </Grid>
                                                <Grid item xs={2}>
                                                    <ArmoryButton variant="contained" color="secondary"
                                                                  onClick={() => handleClickOpen("discard", key, armor.name)}>Wyrzuć</ArmoryButton>

                                                </Grid>

                                            </Grid>)

                                    }
                                    return ("")
                                })}
                            </Grid>
                        </Grid>
                    ))
                    }
                    <Grid container item xs={12} justify="space-between">
                        <Grid item xs={2}>
                            <SaveButton variant="contained" onClick={() => handleClickOpen("buy")}>Kup</SaveButton>
                        </Grid>
                        <Grid item xs={2}>
                            <SaveButton variant="contained" onClick={() => handleClickOpen("loot")}>Łup</SaveButton>

                        </Grid>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Zamknij
                </SaveButton>

            </DialogActions>
            {open.buy ?
                <AddNewArmor open={open.buy} close={() => handleClose("buy")} character={props.character}  armors={armor}
                             update={props.update}/>
                : null}
            {open.loot ?
                <AddLootedArmor open={open.loot} close={() => handleClose("loot")}  character={props.character}
                                armors={armor} update={props.update}/>
                : null}
            {open.negotation ?
                <NegotationArmor open={open.negotation} close={() => handleClose("negotation")}
                                 character={props.character} item={item} update={props.update}/>
                : null}
            {open.discard ?
                <DiscardItem open={open.discard} close={() => handleClose("discard")} character={props.character}
                             item={item} update={props.update} />
                : null}
        </Dialog>
    )

}