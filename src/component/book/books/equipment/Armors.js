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
                                        <TableCell align="center">Nazwa</TableCell>
                                        <TableCell align="center">Cena</TableCell>
                                        <TableCell align="center">Waga</TableCell>
                                        <TableCell align="center">Lokacja</TableCell>
                                        <TableCell align="center">Punkty zbroi</TableCell>
                                        <TableCell align="center">Dostępność</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.armors.map((armor, key) => {
                                        if (armor.type===cat){
                                        return (
                                        <TableRow key={key}>
                                            <TableCell align="center">{armor.name}</TableCell>
                                            <TableCell align="center">{armor.price}</TableCell>
                                            <TableCell align="center">{armor.weight}</TableCell>
                                            <TableCell align="center">{armor.location}</TableCell>
                                            <TableCell align="center">{armor.armorPoints}</TableCell>
                                            <TableCell align="center">{armor.accessibility}</TableCell>
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