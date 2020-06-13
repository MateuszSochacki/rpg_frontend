import React from "react";
import {HeroPanel, HeroPanelDetails, HeroPanelSummary, HeroText} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import HeroMainTraitTable from "./../../table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "./../../table/HeroSecondaryTraitTable";
import {HeroSkillsLetters, SaveButton} from "../../../../../styles/Styles";

import EditTraitsDialog from "./util/traits/EditTraitsDialog";


//
export default function HeroNewTraits(props) {
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
                            {props.character.traits.mainTraits === undefined ? null :
                                <HeroMainTraitTable mainTraits={props.character}/>
                            }
                            {props.character.traits.secondaryTraits === undefined ? null :
                                <HeroSecondaryTraitTable secondaryTraits={props.character}/>
                            }
                        </Grid>
                        {props.character.hero.currentProfession !== undefined ?
                            <>
                                <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                    Edytuj
                                </SaveButton>
                            </> : <HeroSkillsLetters>Wybierz profesję by móc dodać cechy</HeroSkillsLetters>
                        }
                    </Grid>
                </HeroPanelDetails>
            </HeroPanel>

            {
                open ?
                    <EditTraitsDialog open={open} close={handleClose} character={props.character}
                                      setChar={props.setChar}/>
                    : null
            }


        </Paper>


    )

}