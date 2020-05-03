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
import Snackbar from "@material-ui/core/Snackbar";
import API from "../../../../../../../API/API";
import CategoryFromList from "../../../../../../books/equipment/CategoryFromList";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddLootedArmor(props) {


    const [bag, setBag] = useState([]);
    const [character, setCharacter] = useState(props.character);
    const [category, setCategory] = useState([]);

    const handleAddToBag = (name, type) => {
        let bagens = [];
        bagens.push(...bag, {name: name, type: type});
        setBag(bagens);

    };
    const handleRemoveFromBag = (key) => {

        let bagens = bag;
        // bas.splice(key,1);
        delete bagens[key];
        bagens = bagens.filter(x => x !== undefined);
        setBag(bagens);
    };

    const saveLoot = () => {
        let char = character;
        let armorTable = char.armor;

        bag.forEach((item) => armorTable.push({name: item.name, type: item.type}));
        char = {
            ...char, armor: armorTable
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
            <DialogTitle id="alert-dialog-slide-title">{"Łup"}</DialogTitle>
            <DialogContent>
                <Grid container>
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
                                                            <HeroTextField id={"strength" + key} label="Lokacja:"
                                                                           value={armor.location}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"category" + key} label="Kategoria:"
                                                                           value={armor.type}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={() => handleAddToBag(armor.name, armor.type)}>Łup</ArmoryButton>

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
                                        {bag.map((item, key) => {
                                            if (item.type === cat) {
                                                return (
                                                    <Grid container item key={key} spacing={1} justify={"flex-end"}
                                                          alignItems="center"
                                                          direction="row">
                                                        <Grid item xs={9}>
                                                            <HeroTextField id={"itemInBasket" + key} label="Pancerz:"
                                                                           value={item.name}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>
                                                        </Grid>

                                                        <Grid item xs={3}>
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={() => handleRemoveFromBag(key)}>Odłóż</ArmoryButton>
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

                    </Grid>


                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Anuluj
                </SaveButton>
                <SaveButton onClick={saveLoot} color="primary">
                    Łup
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}