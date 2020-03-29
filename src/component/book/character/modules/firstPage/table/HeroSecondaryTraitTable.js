import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../../../styles/expansionPanel/Table";
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
                                <HeroTableCell align="center"> {props.secondaryTraits.attack} </HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.health}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.strength}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.endurance}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.speed}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.magic}</HeroTableCell>
                                <HeroTableCell align="center">{props.secondaryTraits.insanity}</HeroTableCell>
                                <HeroTableCell align="center"> {props.secondaryTraits.fatePoints}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.attack!==null? props.prof.attack:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.prof.health!==null? props.prof.health:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.prof.strength!==null? props.prof.strength:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.endurance!==null? props.prof.endurance:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.speed!==null? props.prof.speed:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.prof.magic!==null? props.prof.magic:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.insanity!==null? props.prof.insanity:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.fatePoints!==null? props.prof.fatePoints:0}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={3}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless} >Aktualna: </HeroTableCell>
                                <HeroTableCell align="center" >80 </HeroTableCell>
                                <HeroTableCell align="center">50</HeroTableCell>
                                <HeroTableCell align="center"> 40</HeroTableCell>
                                <HeroTableCell align="center"> 20</HeroTableCell>
                                <HeroTableCell align="center"> 51</HeroTableCell>
                                <HeroTableCell align="center">35</HeroTableCell>
                                <HeroTableCell align="center"> 87</HeroTableCell>
                                <HeroTableCell align="center"> 15</HeroTableCell>

                            </HeroTableRow>

                        </TableBody>


                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}