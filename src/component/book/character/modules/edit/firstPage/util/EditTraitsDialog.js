import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import HeroMainTraitTable from "../../../table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "../../../table/HeroSecondaryTraitTable";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../styles/Styles";
import {Paper} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditTraitsDialog(props) {

    return(
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Edycja punktów cech postaci"}</DialogTitle>
            <DialogContent>
                <HeroMainTraitTable mainTraits={props.mainTraits}/>
                <HeroSecondaryTraitTable secondaryTraits={props.secondaryTraits}/>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Anuluj
                </SaveButton>
                <SaveButton onClick={props.close} color="primary">
                    Zapisz
                </SaveButton>
            </DialogActions>
        </Dialog>
    )

}