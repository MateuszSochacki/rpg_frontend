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
export default function AddLootedWeapon(props) {

    useEffect(() => {
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
            <DialogTitle id="alert-dialog-slide-title">{"Łup"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12} justify={"center"} alignItems={"center"} spacing={2}>



                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Jednak to tylko kurz
                </SaveButton>
                <SaveButton onClick={props.close} color="primary">
                    Łup
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}