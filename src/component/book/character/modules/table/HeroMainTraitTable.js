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
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.fighting} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.traits.mainTraits.shooting}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.vigor}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.resistance}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.agility}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.traits.mainTraits.intelligence}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.willpower}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.mainTraits.charisma}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={2}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless}>Schemat rozwoju:</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.fighting!==null? "+"+props.mainTraits.heroProfession.mainTraits.fighting:0} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.heroProfession.mainTraits.shooting!==null? "+"+props.mainTraits.heroProfession.mainTraits.shooting:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.vigor!==null? "+"+props.mainTraits.heroProfession.mainTraits.vigor:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.resistance!==null? "+"+props.mainTraits.heroProfession.mainTraits.resistance :0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.agility!==null? "+"+props.mainTraits.heroProfession.mainTraits.agility:0}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.heroProfession.mainTraits.intelligence!==null? "+"+props.mainTraits.heroProfession.mainTraits.intelligence:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.willpower!==null? "+"+props.mainTraits.heroProfession.mainTraits.willpower:0}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.heroProfession.mainTraits.charisma!==null? "+"+props.mainTraits.heroProfession.mainTraits.charisma:0}</HeroTableCell>

                            </HeroTableRow>
                            <HeroTableRow key={3}>
                                <HeroTableCell component="th" scope="row" align={"center"} className={classes.borderless} >Aktualna: </HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.fighting} </HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.traits.currentMainTraits.shooting}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.vigor}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.resistance}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.agility}</HeroTableCell>
                                <HeroTableCell align="center">{props.mainTraits.traits.currentMainTraits.intelligence}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.willpower}</HeroTableCell>
                                <HeroTableCell align="center"> {props.mainTraits.traits.currentMainTraits.charisma}</HeroTableCell>

                            </HeroTableRow>

                        </TableBody>


                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )

}