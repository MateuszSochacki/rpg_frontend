import React, {useEffect} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import {HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import API from "../../../../../../../API/API";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function NegotationArmor(props) {



    const [offer, setOffer] = React.useState({
        gold:0,
        silver:0,
        copper:0});


    const sellItem = () => {
        let char = props.character;
        const crown = parseInt(char.money.gold)+parseInt(offer.gold);
        const silver = parseInt(char.money.silver)+parseInt(offer.silver);
        const copper = parseInt(char.money.copper)+parseInt(offer.copper);
        let armors = props.character.armor;

        delete armors[props.item.key];
        armors = armors.filter(x => x !== undefined);

        char = {
            ...char,
            money: {
                gold: crown,
                silver: silver,
                copper: copper
            },
            armor:armors

        };
        saveButton(char);
    };

    const saveButton = async (chara) => {
        await API.post("/user/sheet/add", chara).then((response) => {
            const res = response.data;
            props.update();
            props.close();


        });
    };

    const handleChange = name => event => {
        setOffer({...offer,[name]: event.target.value});

    };
    useEffect(() => {

    }, [offer]);

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
            <DialogTitle id="alert-dialog-slide-title">{"Negocjacje z mistrzem gry"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12}  justify="space-between" alignItems={"center"} spacing={2}>
                        <Grid item xs={4}>
                            <HeroTextField id="name" label="Broń:" value={props.item.name}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={2}>
                            <HeroTextField id="bookOfKnowledge" label="Książkowa cena:" value={props.item.price}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={2}>
                            <HeroTextField id="offerGold" label="Oferta w koronach:" value={offer.gold}
                                           onChange={handleChange("gold")}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={2}>
                            <HeroTextField id="offerSilver" label="Oferta w szylingach:" value={offer.silver}
                                           onChange={handleChange("silver")}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={2}>
                            <HeroTextField id="offerCopper" label="Oferta pensach:" value={offer.copper}
                                           onChange={handleChange("copper")}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>


                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Zaniechaj negocjacji
                </SaveButton>
                <SaveButton onClick={sellItem} color="primary">
                    Sprzedane
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}