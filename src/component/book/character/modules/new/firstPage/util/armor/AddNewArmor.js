import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {ArmoryButton, SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import API from "../../../../../../../API/API";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CategoryFromList from "../../../../../../books/equipment/CategoryFromList";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};
export default function AddNewArmor(props) {
    const [crown, setCrown] = useState(props.character.money.gold);
    const [silver, setSilver] = useState(props.character.money.silver);
    const [copper, setCopper] = useState(props.character.money.copper);
    const [basket, setBasket] = useState([]);
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState();
    const [character, setCharacter] = useState(props.character);
    const [category, setCategory] = useState([]);

    const handleAddToCart = (name, category, price) => {


        let bas = [];
        if (price.includes("p")) {
            let p = price.substring(0, price.indexOf("p"));
            if (parseInt(p) <= copper) {

                p = parseInt(copper) - parseInt(p);
                setCopper(p);
                bas.push(...basket, {name: name, price: price, type: category});
                setBasket(bas);

            } else {
                setMessage("Brak pensów");
                setAlert(true);

            }

        } else if (price.includes("s")) {
            let s = price.substring(0, price.indexOf("s"));
            if (parseInt(s) <= silver) {
                s = parseInt(silver) - parseInt(s);
                setSilver(s);
                bas.push(...basket, {name: name, price: price, type: category});
                setBasket(bas);

            } else {
                setMessage("Brak srebra")
                setAlert(true);

            }
        } else if (price.includes("k")) {
            let k = price.substring(0, price.indexOf("k"));
            if (parseInt(k) <= crown) {
                k = parseInt(crown) - parseInt(k);
                setCrown(k);
                bas.push(...basket, {name: name, price: price, type: category});
                setBasket(bas);

            } else {
                setMessage("Brak koron");
                setAlert(true);

            }
        }


    };
    const handleRemoveFromCart = (key, price) => {

        let bas = basket;
        // bas.splice(key,1);
        delete bas[key];
        if (price.includes("p")) {
            let p = price.substring(0, price.indexOf("p"));
            p = parseInt(copper) + parseInt(p);
            setCopper(p);
        } else if (price.includes("s")) {
            let s = price.substring(0, price.indexOf("s"));
            s = parseInt(silver) + parseInt(s);
            setSilver(s);
        } else if (price.includes("k")) {
            let k = price.substring(0, price.indexOf("k"));
            k = parseInt(crown) + parseInt(k);
            setCrown(k);
        }
        bas = bas.filter(x => x !== undefined);
        setBasket(bas);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };
    const saveWeapons = () => {
        let char = character;
        let armorTable = char.armor;

        basket.forEach((item) => armorTable.push({name: item.name, type: item.type}));
        char = {
            ...char, armor: armorTable, money: {
                gold: crown,
                silver: silver,
                copper: copper
            }
        };

        // console.log(char)
        saveButton(char);

    };

    const saveButton = async (chara) => {
        await API.post("/user/sheet/add", chara).then((response) => {
            const res = response.data;
            props.update();
            props.close();
        });
    };

    useEffect(() => {
        setCategory(CategoryFromList(props.armors));
    }, []);
    useEffect(() => {

    }, [crown, silver, copper]);

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
                            <HeroTextField id="gold" label="Złote korony:" value={crown}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={4}>
                            <HeroTextField id="silver" label="Srebrne szylingi:" value={silver}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={4}>
                            <HeroTextField id="copper" label="Mosiężne pensy:" value={copper}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>


                    </Grid>
                    <Grid container>
                        <Grid item xs={9}>

                            {category.map((cat, catKey) => (
                                <Grid container key={catKey}>
                                    <Grid item xs={12} style={{marginTop: 25}}>
                                        {cat}
                                        {props.armors.map((armor, key) => {
                                            if (armor.type === cat) {
                                                return (
                                                    <Grid container item xs={12} key={key} spacing={1}
                                                          justify={"flex-end"}
                                                          alignItems="center"
                                                          direction="row" style={{marginBottom: 5}}>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"name" + key} label="Nazwa:"
                                                                           value={armor.name}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <HeroTextField id={"price" + key} label="Cena:"
                                                                           value={armor.price}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <HeroTextField id={"armorPoints" + key}
                                                                           label="Punkty Zbroi:"
                                                                           value={armor.armorPoints}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"location" + key} label="Lokacja:"
                                                                           value={armor.location}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={() => handleAddToCart(armor.name, armor.type, armor.price)}>Kup</ArmoryButton>

                                                        </Grid>

                                                    </Grid>
                                                )

                                            }
                                            return ("")
                                        })}
                                    </Grid>
                                </Grid>
                            ))
                            }

                        </Grid>
                        <Grid item xs={3}>
                            {category.map((cat, catKey) => (
                                <Grid container key={catKey}>
                                    <Grid item xs={12} style={{marginTop: 25}}>
                                        {cat}
                                        {basket.map((item, key) => {
                                            if (item.type === cat) {
                                                return (
                                                    <Grid container item key={key} spacing={1} justify={"flex-end"}
                                                          alignItems="center"
                                                          direction="row"
                                                          style={{marginTop: 25}}>
                                                        <Grid item xs={6}>
                                                            <HeroTextField id={"itemInBasket" + key} label="Broń:"
                                                                           value={item.name}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"priceOfItem" + key} label="Cena:"
                                                                           value={item.price}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={() => handleRemoveFromCart(key, item.price)}>Odłóż</ArmoryButton>
                                                        </Grid>
                                                    </Grid>
                                                )

                                            }
                                            return ("")
                                        })}
                                    </Grid>
                                </Grid>
                            ))
                            }
                        </Grid>
                        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="error">
                                {message}
                            </Alert>
                        </Snackbar>
                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Trzasnij drzwiami
                </SaveButton>
                <SaveButton onClick={saveWeapons} color="primary">
                    Kup
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}