import React from "react";
import {HeroPanel, HeroPanelDetails, HeroPanelSummary, HeroText} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import HeroMainTraitTable from "./../../table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "./../../table/HeroSecondaryTraitTable";
import {SaveButton} from "../../../../../styles/Styles";

import EditTraitsDialog from "./util/traits/EditTraitsDialog";


//
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
                            <HeroMainTraitTable mainTraits={props.character}/>
                            <HeroSecondaryTraitTable secondaryTraits={props.character}/>
                        </Grid>
                        <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                            Edytuj
                        </SaveButton>
                    </Grid>
                </HeroPanelDetails>
            </HeroPanel>
            {open ?
                <EditTraitsDialog open={open} close={handleClose} character={props.character} update={props.update}/>
                :null}
        </Paper>


    )

}