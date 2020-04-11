import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import EditMainTraits from "./EditMainTraits";
import HeroSecondaryTraitTable from "../../../table/HeroSecondaryTraitTable";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../styles/Styles";
import {Paper} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import EditSecondTraits from "./EditSecondTraits";
import {HeroTextField} from "../../../../../../styles/expansionPanel/Panel";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditTraitsDialog(props) {

    useEffect(() => {

    }, []);
    const [currentExp,setCurrentExp] = useState(props.character.experiencePoints.current)
    const handleCurrentExp = (exp) =>{
        setCurrentExp(exp);
    };

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
            <DialogTitle id="alert-dialog-slide-title">{"Edycja punktów cech postaci"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12} justify={"center"} alignItems={"center"}>
                        <HeroTextField id="exp" label="Dostępne doświadczenie:" value={currentExp} style={{marginBottom:50}} inputProps={{min: 0, style: {textAlign: "center"}}}/>

                        <Grid item xs={6}>
                            <EditMainTraits mainTraits={props.character} current={currentExp} onExpChange={handleCurrentExp} />
                        </Grid>
                        <Grid item xs={6}>
                            <EditSecondTraits secondaryTraits={props.character} current={currentExp} onExpChange={handleCurrentExp} />
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
        </Dialog>
    )

}