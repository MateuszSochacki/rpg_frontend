import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    borderless: {

        border: 'none',
        fontSize: 11

    },

}));

export default function HeroWeapon() {
    const classes = useStyles();

    return (
        <Paper elevation={8}>
            <HeroPanel expanded={true}>
                <HeroPanelSummary>
                    <HeroText>
                        Broń
                    </HeroText>
                </HeroPanelSummary>
                <HeroPanelDetails>
                    <Grid container>
                        <Grid item xs={12}>

                            <TableContainer>
                                <Table aria-label="customized table">

                                    <TableHead>
                                        <TableRow>
                                            <HeroTableCell align={"left"}
                                                           className={classes.borderless}>Nazwa</HeroTableCell>
                                            <HeroTableCell align={"left"}
                                                           className={classes.borderless}>Obc.</HeroTableCell>
                                            <HeroTableCell align={"left"}
                                                           className={classes.borderless}>Kategoria</HeroTableCell>
                                            <HeroTableCell align={"left"} className={classes.borderless}>Siła
                                                broni</HeroTableCell>
                                            <HeroTableCell align={"left"}
                                                           className={classes.borderless}>Zasięg</HeroTableCell>
                                            <HeroTableCell align={"left"}
                                                           className={classes.borderless}>Przeład.</HeroTableCell>
                                            <HeroTableCell align={"left"} className={classes.borderless}>Cechy
                                                oręża</HeroTableCell>


                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <HeroTableRow key={1}>
                                            <HeroTableCell align="center"> Korbacz </HeroTableCell>
                                            <HeroTableCell align="center">30</HeroTableCell>
                                            <HeroTableCell align="center"> Mocarne</HeroTableCell>
                                            <HeroTableCell align="center"> S-1</HeroTableCell>
                                            <HeroTableCell align="center"> 0</HeroTableCell>
                                            <HeroTableCell align="center"> 0</HeroTableCell>
                                            <HeroTableCell align="center"> Podwójny chuj</HeroTableCell>


                                        </HeroTableRow>

                                    </TableBody>


                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )
}