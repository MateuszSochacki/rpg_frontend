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
export default function HeroMainTraitTable(props) {

    const classes= useStyles();
    return (
        <Grid container direction={"column"}>
            <Grid item xs={12}>
                <TableContainer>
                    <Table aria-label="customized table">

                        <TableHead>
                            <TableRow>
                                <HeroTableCell className={classes.borderless}>Cechy główne:</HeroTableCell>
                                <HeroTableCell>WW</HeroTableCell>
                                <HeroTableCell>US</HeroTableCell>
                                <HeroTableCell>K</HeroTableCell>
                                <HeroTableCell>Odp</HeroTableCell>
                                <HeroTableCell>Zr</HeroTableCell>
                                <HeroTableCell>Int</HeroTableCell>
                                <HeroTableCell>SW</HeroTableCell>
                                <HeroTableCell>Ogd</HeroTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <HeroTableRow key={props.key}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}> Początkowa: </HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.fighting} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.shooting}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.vigor}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.resistance}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.agility}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.intelligence}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.willpower}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.charisma}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.fighting!==null? props.prof.fighting:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.prof.shooting!==null? props.prof.shooting:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.vigor!==null? props.prof.vigor:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.resistance!==null?props.prof.resistance :0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.agility!==null? props.prof.agility:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.prof.intelligence!==null? props.prof.intelligence:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.willpower!==null? props.prof.willpower:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.prof.charisma!==null? props.prof.charisma:0}</HeroTableCell>

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