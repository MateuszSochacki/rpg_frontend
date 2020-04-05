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
                                <HeroTableCell align="center"> {props.secondaryTraits.secondaryTraits.attack} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.secondaryTraits.health}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.secondaryTraits.strength}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.secondaryTraits.endurance}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.secondaryTraits.speed}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.secondaryTraits.magic}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.secondaryTraits.insanity}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.secondaryTraits.fatePoints}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.professionSecondaryTraits.attack!==null? props.secondaryTraits.professionSecondaryTraits.attack:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.professionSecondaryTraits.health!==null? props.secondaryTraits.professionSecondaryTraits.health:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.professionSecondaryTraits.strength!==null? props.secondaryTraits.professionSecondaryTraits.strength:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.professionSecondaryTraits.endurance!==null? props.secondaryTraits.professionSecondaryTraits.endurance:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.professionSecondaryTraits.speed!==null? props.secondaryTraits.professionSecondaryTraits.speed:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.professionSecondaryTraits.magic!==null? props.secondaryTraits.professionSecondaryTraits.magic:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.professionSecondaryTraits.insanity!==null? props.secondaryTraits.professionSecondaryTraits.insanity:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.professionSecondaryTraits.fatePoints!==null? props.secondaryTraits.professionSecondaryTraits.fatePoints:0}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={3}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless} >Aktualna: </HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.currentCharacterSecondaryTraits.attack} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.currentCharacterSecondaryTraits.health}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.currentCharacterSecondaryTraits.strength}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.currentCharacterSecondaryTraits.endurance}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.currentCharacterSecondaryTraits.speed}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.currentCharacterSecondaryTraits.magic}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.currentCharacterSecondaryTraits.insanity}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.currentCharacterSecondaryTraits.fatePoints}</HeroTableCell>

                            </HeroTableRow>

                        </TableBody>


                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}