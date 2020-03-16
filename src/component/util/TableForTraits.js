import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {StyledTableCell, StyledTableRow} from "../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Papirus = withStyles({
    root: {
        background: "#000",
        color: "#fff",
    },
})(Paper);

export default function TableForTraits(props) {
    return (
        <Papirus>

            <Typography align={"center"}>
                Cechy Pierwszorzędne
            </Typography>

            <TableContainer>
                <Table aria-label="customized table">

                    <TableHead>


                        <TableRow>
                            <StyledTableCell align="center">WW</StyledTableCell>
                            <StyledTableCell align="center">US</StyledTableCell>
                            <StyledTableCell align="center">K</StyledTableCell>
                            <StyledTableCell
                                align="center">Odp</StyledTableCell>
                            <StyledTableCell align="center">Zr</StyledTableCell>
                            <StyledTableCell
                                align="center">Int</StyledTableCell>
                            <StyledTableCell align="center">SW</StyledTableCell>
                            <StyledTableCell
                                align="center">Ogł</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        <StyledTableRow>
                            <StyledTableCell component="th"
                                             scope="row"
                                             align="center">
                                {props.mainTraits.fighting===null? "-" : props.mainTraits.fighting}
                            </StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.shooting===null? "-" :props.mainTraits.shooting}</StyledTableCell>

                            <StyledTableCell
                                align="center">{props.mainTraits.vigor===null? "-" :props.mainTraits.vigor}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.resistance===null? "-" :props.mainTraits.resistance}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.agility===null? "-" :props.mainTraits.agility}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.intelligence===null? "-" :props.mainTraits.intelligence}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.willpower===null? "-" :props.mainTraits.willpower}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.mainTraits.charisma===null? "-" :props.mainTraits.charisma}</StyledTableCell>


                        </StyledTableRow>


                    </TableBody>


                </Table>
            </TableContainer>
            <Typography align={"center"}>
                Cechy Drugorzędne
            </Typography>
            <TableContainer>
                <Table aria-label="customized table">

                    <TableHead>


                        <TableRow>
                            <StyledTableCell align="center">A</StyledTableCell>
                            <StyledTableCell align="center">PŻ</StyledTableCell>
                            <StyledTableCell align="center">S</StyledTableCell>
                            <StyledTableCell align="center">K</StyledTableCell>
                            <StyledTableCell align="center">Sz</StyledTableCell>
                            <StyledTableCell
                                align="center">Mag</StyledTableCell>
                            <StyledTableCell align="center">PO</StyledTableCell>
                            <StyledTableCell align="center">PP</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        <StyledTableRow>
                            <StyledTableCell component="th"
                                             scope="row"
                                             align="center">
                                {props.secondaryTraits.attack ===null? "-" :props.secondaryTraits.attack}
                            </StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.health ===null? "-" :props.secondaryTraits.health}</StyledTableCell>

                            <StyledTableCell
                                align="center">{props.secondaryTraits.strength ===null? "-" :props.secondaryTraits.strength}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.endurance ===null? "-" :props.secondaryTraits.endurance}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.speed ===null? "-" :props.secondaryTraits.speed}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.magic ===null? "-" :props.secondaryTraits.magic}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.insanity ===null? "-" :props.secondaryTraits.insanity}</StyledTableCell>
                            <StyledTableCell
                                align="center">{props.secondaryTraits.fatePoints ===null? "-" :props.secondaryTraits.fatePoints}</StyledTableCell>


                        </StyledTableRow>


                    </TableBody>


                </Table>
            </TableContainer>
        </Papirus>
    )
}