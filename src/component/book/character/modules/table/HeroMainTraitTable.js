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
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.fighting} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.mainTraits.shooting}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.vigor}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.resistance}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.agility}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.mainTraits.intelligence}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.willpower}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.mainTraits.charisma}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.fighting!==null? props.mainTraits.professionMainTraits.fighting:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.professionMainTraits.shooting!==null? props.mainTraits.professionMainTraits.shooting:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.vigor!==null? props.mainTraits.professionMainTraits.vigor:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.resistance!==null?props.mainTraits.professionMainTraits.resistance :0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.agility!==null? props.mainTraits.professionMainTraits.agility:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.professionMainTraits.intelligence!==null? props.mainTraits.professionMainTraits.intelligence:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.willpower!==null? props.mainTraits.professionMainTraits.willpower:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.professionMainTraits.charisma!==null? props.mainTraits.professionMainTraits.charisma:0}</HeroTableCell>

                            </HeroTableRow>
                            {console.log(props.mainTraits)}
                            <HeroTableRow key={3}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless} >Aktualna: </HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.fighting} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.currentCharacterMainTraits.shooting}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.vigor}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.resistance}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.agility}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.currentCharacterMainTraits.intelligence}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.willpower}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.currentCharacterMainTraits.charisma}</HeroTableCell>

                            </HeroTableRow>

                        </TableBody>


                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}