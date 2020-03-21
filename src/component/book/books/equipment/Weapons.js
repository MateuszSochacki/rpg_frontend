import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import {Tooltip} from "@material-ui/core";
import {StyledTableCell} from "../../../styles/expansionPanel/Table";



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function Weapons(props) {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Nazwa</StyledTableCell>
                            <StyledTableCell align="center">Cena</StyledTableCell>
                            <StyledTableCell align="center">Waga</StyledTableCell>
                            <StyledTableCell align="center">Kategoria Broni</StyledTableCell>
                            <StyledTableCell align="center">Zasięg minimalny</StyledTableCell>
                            <StyledTableCell align="center">Zasięg maksymalny</StyledTableCell>
                            <StyledTableCell align="center">Czas przeładowania</StyledTableCell>
                            <StyledTableCell align="center">Siła uderzenia</StyledTableCell>
                            <StyledTableCell align="center">Cechy Broni</StyledTableCell>
                            <StyledTableCell align="center">Dostępność</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.weapons.map((weapon,key) => (
                            <TableRow key={key}>
                                <StyledTableCell component="th" scope="row">
                                    {weapon.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{weapon.price}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.weight}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.category}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.rangeMin}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.rangeMax}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.reload!==null? weapon.reload : "Brak"}</StyledTableCell>
                                <StyledTableCell align="center">{weapon.strength}</StyledTableCell>
                                <StyledTableCell align="center" >{weapon.weaponTrait.map(currentTrait=> {
                                    return(
                                        <Tooltip title={currentTrait.description} key={key}>
                                            <Typography key={key}>
                                                <i>{currentTrait.name}</i>
                                            </Typography>

                                        </Tooltip>

                                    );})}
                                </StyledTableCell>

                                <StyledTableCell align="center">{weapon.accessibility}</StyledTableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}