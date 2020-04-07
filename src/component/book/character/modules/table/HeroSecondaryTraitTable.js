import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    borderless: {
        border: 'none',
        fontSize:11
    },

}));
export default function HeroSecondaryTraitTable(props) {

    const classes= useStyles();
    return (
        <Grid container direction={"column"}>
            <Grid item xs={12}>
                <TableContainer>
                    <Table aria-label="customized table">

                        <TableHead>
                            <TableRow>
                                <HeroTableCell className={classes.borderless}>Cechy drugorzędne:</HeroTableCell>
                                <HeroTableCell>A</HeroTableCell>
                                <HeroTableCell>Żyw</HeroTableCell>
                                <HeroTableCell>S</HeroTableCell>
                                <HeroTableCell>Wt</HeroTableCell>
                                <HeroTableCell>Sz</HeroTableCell>
                                <HeroTableCell>Mag</HeroTableCell>
                                <HeroTableCell>PO</HeroTableCell>
                                <HeroTableCell>PP</HeroTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <HeroTableRow key={1}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}> Początkowa: </HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.secondaryTraits.attack} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.secondaryTraits.health}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.secondaryTraits.strength}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.secondaryTraits.endurance}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.secondaryTraits.speed}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.secondaryTraits.magic}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.secondaryTraits.insanity}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.secondaryTraits.fatePoints}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.heroProfession.secondaryTraits.attack!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.attack:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.heroProfession.secondaryTraits.health!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.health:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.heroProfession.secondaryTraits.strength!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.strength:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.heroProfession.secondaryTraits.endurance!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.endurance:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.heroProfession.secondaryTraits.speed!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.speed:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.heroProfession.secondaryTraits.magic!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.magic:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.heroProfession.secondaryTraits.insanity!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.insanity:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.heroProfession.secondaryTraits.fatePoints!==null? "+"+props.secondaryTraits.heroProfession.secondaryTraits.fatePoints:0}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={3}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless} >Aktualna: </HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.currentSecondaryTraits.attack} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.currentSecondaryTraits.health}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.currentSecondaryTraits.strength}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.currentSecondaryTraits.endurance}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.currentSecondaryTraits.speed}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.currentSecondaryTraits.magic}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.traits.currentSecondaryTraits.insanity}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.traits.currentSecondaryTraits.fatePoints}</HeroTableCell>

                            </HeroTableRow>

                        </TableBody>


                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}