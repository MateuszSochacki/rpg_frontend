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
                            <TableCell align="center">Nazwa</TableCell>
                            <TableCell align="center">Cena</TableCell>
                            <TableCell align="center">Waga</TableCell>
                            <TableCell align="center">Kategoria Broni</TableCell>
                            <TableCell align="center">Zasięg minimalny</TableCell>
                            <TableCell align="center">Zasięg maksymalny</TableCell>
                            <TableCell align="center">Czas przeładowania</TableCell>
                            <TableCell align="center">Siła uderzenia</TableCell>
                            <TableCell align="center">Cechy Broni</TableCell>
                            <TableCell align="center">Dostępność</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.weapons.map((weapon,key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {weapon.name}
                                </TableCell>
                                <TableCell align="center">{weapon.price}</TableCell>
                                <TableCell align="center">{weapon.weight}</TableCell>
                                <TableCell align="center">{weapon.category}</TableCell>
                                <TableCell align="center">{weapon.rangeMin}</TableCell>
                                <TableCell align="center">{weapon.rangeMax}</TableCell>
                                <TableCell align="center">{weapon.reload!==null? weapon.reload : "Brak"}</TableCell>
                                <TableCell align="center">{weapon.strength}</TableCell>
                                <TableCell align="center" >{weapon.weaponTrait.map(currentTrait=> {
                                    return(
                                        <Tooltip title={currentTrait.description} key={key}>
                                            <Typography key={key}>
                                                <i>{currentTrait.name}</i>
                                            </Typography>

                                        </Tooltip>

                                    );})}
                                </TableCell>

                                <TableCell align="center">{weapon.accessibility}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}