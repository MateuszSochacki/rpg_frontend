import React from "react";
import {HeroPanel, HeroPanelDetails, HeroPanelSummary, HeroText} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";

import HeroMainTraitTable from "./table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "./table/HeroSecondaryTraitTable";

export default function HeroTraits() {

    return(
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
                    <HeroMainTraitTable/>
                    <HeroSecondaryTraitTable/>
                </Grid>
            </Grid>
        </HeroPanelDetails>
    </HeroPanel>
        </Paper>

            )

}