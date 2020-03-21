import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CategoryFromList from "./CategoryFromList";
import {Panel,PanelSummary} from "../../../styles/expansionPanel/Panel";
import {StyledTableCell} from "../../../styles/expansionPanel/Table";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function Armors(props) {

    const classes = useStyles();

    const [category, setCategory] = useState([]);

    useEffect(()=>{
        setCategory(CategoryFromList(props.armors));
    },[]);


    return (
        <>
            {category.map((cat,key)=>(


                <Panel key={key} className={classes.expansionPanel}>
                    <PanelSummary  key={key} className={classes.expansionPanelContent}>
                        {cat}
                    </PanelSummary>
                    <ExpansionPanelDetails key={key}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table" key={key}>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Nazwa</StyledTableCell>
                                        <StyledTableCell align="center">Cena</StyledTableCell>
                                        <StyledTableCell align="center">Waga</StyledTableCell>
                                        <StyledTableCell align="center">Lokacja</StyledTableCell>
                                        <StyledTableCell align="center">Punkty zbroi</StyledTableCell>
                                        <StyledTableCell align="center">Dostępność</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.armors.map((armor, key) => {
                                        if (armor.type===cat){
                                        return (
                                        <TableRow key={key}>
                                            <StyledTableCell align="center">{armor.name}</StyledTableCell>
                                            <StyledTableCell align="center">{armor.price}</StyledTableCell>
                                            <StyledTableCell align="center">{armor.weight}</StyledTableCell>
                                            <StyledTableCell align="center">{armor.location}</StyledTableCell>
                                            <StyledTableCell align="center">{armor.armorPoints}</StyledTableCell>
                                            <StyledTableCell align="center">{armor.accessibility}</StyledTableCell>
                                        </TableRow>
                                        )}return ("")})}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </ExpansionPanelDetails>


                </Panel>
            ))
            }
        </>
    )
}