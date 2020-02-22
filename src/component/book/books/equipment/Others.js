import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Others(props) {

    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Typ</TableCell>
                            <TableCell align="center">Nazwa</TableCell>
                            <TableCell align="center">Cena</TableCell>
                            <TableCell align="center">Waga</TableCell>
                            <TableCell align="center">Dostępność</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.others.map((other, key) => (
                            <TableRow key={key}>
                                <TableCell align="center" component="th" scope="row">
                                    {other.type}
                                </TableCell>
                                <TableCell align="center">{other.name}</TableCell>
                                <TableCell align="center">{other.price}</TableCell>
                                <TableCell align="center">{other.weight}</TableCell>
                                <TableCell align="center">{other.accessibility}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}