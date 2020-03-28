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
export default function HeroMainTraitTable() {

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

                            <HeroTableRow key={1}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}> Początkowa: </HeroTableCell>
                                <HeroTableCell align="center"> 43 </HeroTableCell>
                                <HeroTableCell align="center">30</HeroTableCell>
                                <HeroTableCell align="center"> 40</HeroTableCell>
                                <HeroTableCell align="center"> 55</HeroTableCell>
                                <HeroTableCell align="center"> 30</HeroTableCell>
                                <HeroTableCell align="center"> 20</HeroTableCell>
                                <HeroTableCell align="center"> 18</HeroTableCell>
                                <HeroTableCell align="center"> 31</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> +5 </HeroTableCell>
                                <HeroTableCell align="center">+2</HeroTableCell>
                                <HeroTableCell align="center"> 0</HeroTableCell>
                                <HeroTableCell align="center"> 0</HeroTableCell>
                                <HeroTableCell align="center"> 0</HeroTableCell>
                                <HeroTableCell align="center"> 0</HeroTableCell>
                                <HeroTableCell align="center"> 0</HeroTableCell>
                                <HeroTableCell align="center"> +20</HeroTableCell>

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