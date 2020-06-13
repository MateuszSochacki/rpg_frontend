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
import CategoryFromList from "../../../../../../books/equipment/CategoryFromList";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddLootedEquipment(props) {


    const [bag, setBag] = useState([]);
    const [character, setCharacter] = useState(props.character);
    const [category, setCategory] = useState([]);

    const handleAddToBag = (name, type,weight) => {
        let bagens = [];
        bagens.push(...bag, {name: name, type: type,weight:weight});
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
        let eqTable = char.equipment;

        bag.forEach((item) => eqTable.push({name: item.name, type: item.type,weight:item.weight}));
        char = {
            ...char, equipment: eqTable
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
        setCategory(CategoryFromList(props.eq));

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
                                        {props.eq.map((eq, key) => {
                                            if (eq.type === cat) {
                                                return (
                                                    <Grid container item xs={12} key={key} spacing={1}
                                                          justify={"flex-end"}
                                                          alignItems="center"
                                                          direction="row" style={{marginBottom: 5}}>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"name" + key} label="Nazwa:"
                                                                           value={eq.name}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <HeroTextField id={"price" + key} label="Cena:"
                                                                           value={eq.price}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <HeroTextField id={"weight" + key} label="Lokacja:"
                                                                           value={eq.weight}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <HeroTextField id={"category" + key} label="Kategoria:"
                                                                           value={eq.type}
                                                                           inputProps={{
                                                                               min: 0,
                                                                               style: {textAlign: "center"}
                                                                           }}/>

                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <ArmoryButton variant="contained" color="primary"
                                                                          onClick={() => handleAddToBag(eq.name, eq.type,eq.weight)}>Łup</ArmoryButton>

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