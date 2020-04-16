import React, {useEffect} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {AddButton, ArmoryButton, SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import {HeroPanel, HeroTextField} from "../../../../../../../styles/expansionPanel/Panel";
import Button from '@material-ui/core/Button';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function NegotationWeapoon(props) {

    const [offer, setOffer] = React.useState({
        gold:0,
        silver:0,
        copper:0});

    const handleChange = name => event => {
        setOffer({...offer,[name]: event.target.value});

    };
    useEffect(() => {
        console.log(offer)

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
                        <Grid item xs={3}>
                            <HeroTextField id="bookOfKnowledge" label="Cena według książki:" value={props.howMuch}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={3}>
                            <HeroTextField id="offerGold" label="Oferta w koronach:" value={offer.gold}
                                           onChange={handleChange("gold")}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={3}>
                            <HeroTextField id="offerSilver" label="Oferta w szylingach:" value={offer.silver}
                                           onChange={handleChange("silver")}
                                           style={{marginBottom: 50}}
                                           inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        </Grid>
                        <Grid item xs={3}>
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
                <SaveButton onClick={props.close} color="primary">
                    Sprzedane
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}