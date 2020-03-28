import React from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";


export default function HeroArmor() {

    return(
        <Paper elevation={8}>
            <HeroPanel expanded={true}>
                <HeroPanelSummary>
                    <HeroText>
                        pancerz
                    </HeroText>
                </HeroPanelSummary>
                <HeroPanelDetails>
                    <Grid container>
                        <Grid item xs={12} >
                            <Typography align={"left"}>Opancerzenie proste:</Typography>
                            <Grid container  >
                                <Grid item xs={6} style={{borderRight:"1px solid",borderTop:"1px solid",borderBottom:"1px solid"}}>
                                    <HeroTextField id="armorType" label="Typ pancerza: " value={"Płytówka"} />


                                </Grid>
                                <Grid item xs={6} style={{borderTop:"1px solid",borderBottom:"1px solid"}}>
                                    <HeroTextField id="armorPoints" label="Punkty zbroi: " value={"4"} />
                                </Grid>



                            </Grid>

                            <Typography align={"left"}>Opancerzenie złożone:</Typography>
                            <TableContainer>
                                <Table aria-label="customized table">

                                    <TableHead>
                                        <TableRow>
                                            <HeroTableCell align={"left"}>Typ pancerza</HeroTableCell>
                                            <HeroTableCell align={"left"}>Obc.</HeroTableCell>
                                            <HeroTableCell align={"left"}>Lokacja ciała</HeroTableCell>
                                            <HeroTableCell align={"left"}>PZ</HeroTableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <HeroTableRow key={1}>
                                            <HeroTableCell align="left"> Kurta </HeroTableCell>
                                            <HeroTableCell align="center">30</HeroTableCell>
                                            <HeroTableCell align="center"> Głowa</HeroTableCell>
                                            <HeroTableCell align="center"> 2</HeroTableCell>


                                        </HeroTableRow>

                                    </TableBody>


                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )
}