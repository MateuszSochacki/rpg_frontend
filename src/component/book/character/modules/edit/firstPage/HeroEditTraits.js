import React, {useEffect, useState} from "react";
import {HeroPanel, HeroPanelDetails, HeroPanelSummary, HeroText} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";

import HeroMainTraitTable from "./../../table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "./../../table/HeroSecondaryTraitTable";
import API from "../../../../../API/API";
import {SaveButton} from "../../../../../styles/Styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import EditTraitsDialog from "./util/EditTraitsDialog";


export default function HeroEditTraits(props) {
    // const [profession, setProfession] = useState(0);
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <Paper elevation={8}>
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText>
                            Cechy
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>
                                <HeroMainTraitTable mainTraits={props.character.traits}/>
                                <HeroSecondaryTraitTable secondaryTraits={props.character.traits}/>
                            </Grid>
                            <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                Edytuj
                            </SaveButton>
                        </Grid>
                    </HeroPanelDetails>
                </HeroPanel>
            {open ?
                <EditTraitsDialog open={open} close={handleClose} mainTraits={props.character.traits} secondaryTraits={props.character.traits}/>
            :null}
        </Paper>


    )

}