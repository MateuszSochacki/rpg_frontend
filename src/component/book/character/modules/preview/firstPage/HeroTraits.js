import React, {useEffect, useState} from "react";
import {HeroPanel, HeroPanelDetails, HeroPanelSummary, HeroText} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";

import HeroMainTraitTable from "./../../table/HeroMainTraitTable";
import HeroSecondaryTraitTable from "./../../table/HeroSecondaryTraitTable";

export default function HeroTraits(props) {
    // const [profession, setProfession] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        // let didCancel = false;
        //
        // // async function fetchProfession() {
        // //     let name={
        // //         name:props.profession
        // //     };
        // //
        // //
        // //     await API.post("book/profession/name",name).then(async (response) => {
        // //
        // //         if (!didCancel) {
        // //             const prof = response.data;
        // //             setProfession(prof);
        // //
        // //             setIsLoading(false);
        // //         }
        // //     }).catch(error => {
        // //         console.log(error)
        // //     });
        // //
        // // }
        // //
        // //
        // //
        // //
        // // fetchProfession();
        // return () => {
        //     didCancel = true;
        // };

    }, []);
    return (

        <Paper elevation={8}>
            {/*{isLoading ? null :*/}
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText>
                            Cechy
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>
                                <HeroMainTraitTable mainTraits={props.traits}/>
                                <HeroSecondaryTraitTable secondaryTraits={props.traits}/>
                            </Grid>
                        </Grid>
                    </HeroPanelDetails>
                </HeroPanel>
            {/*}*/}
        </Paper>


    )

}