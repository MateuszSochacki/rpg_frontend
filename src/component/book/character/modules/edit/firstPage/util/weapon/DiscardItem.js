import React, {useEffect} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import API from "../../../../../../../API/API";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function DiscardItem(props) {

    const discardItem = () => {
        let char = props.character;
        let weapons = props.character.weapon;

        delete weapons[props.item.key];
        weapons = weapons.filter(x => x !== undefined);

        char = {
            ...char,
            weapon:weapons

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
            <DialogTitle id="alert-dialog-slide-title">{"Wyrzucić? "+props.item.name}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12}  justify="space-between" alignItems={"center"} spacing={2}>

                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Anuluj
                </SaveButton>
                <SaveButton onClick={discardItem} color="primary">
                    Wyrzuć
                </SaveButton>
            </DialogActions>

        </Dialog>
    )

}