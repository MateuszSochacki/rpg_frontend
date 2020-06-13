import React, {useEffect, useState} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import API from "../../../../../API/API";
import {HeroSkillsLetters, SaveButton} from "../../../../../styles/Styles";
import EditArmorDialog from "./util/armor/EditArmorDialog";


export default function HeroNewArmor(props) {



    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };


    return (
        <Paper elevation={8}>

                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText>
                            pancerz
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>

                                            <>
                                                <Typography align={"left"}>Opancerzenie złożone:</Typography>
                                                <TableContainer>
                                                    <Table aria-label="customized table">

                                                        <TableHead>
                                                            <TableRow>
                                                                <HeroTableCell align={"left"}>Typ
                                                                    pancerza</HeroTableCell>
                                                                <HeroTableCell align={"left"}>Obc.</HeroTableCell>
                                                                <HeroTableCell align={"left"}>Lokacja
                                                                    ciała</HeroTableCell>
                                                                <HeroTableCell align={"left"}>PZ</HeroTableCell>

                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            {props.character.armor.map((armor, key) => (


                                                                <HeroTableRow key={key}>
                                                                    <HeroTableCell
                                                                        align="left"> {armor.type + " " + armor.name} </HeroTableCell>
                                                                    <HeroTableCell
                                                                        align="center">{armor.weight}</HeroTableCell>
                                                                    <HeroTableCell
                                                                        align="center">{armor.location.map(location => (location))}</HeroTableCell>
                                                                    <HeroTableCell
                                                                        align="center"> {armor.armorPoints}</HeroTableCell>


                                                                </HeroTableRow>
                                                            ))}
                                                        </TableBody>


                                                    </Table>
                                                </TableContainer>
                                            </>
                            </Grid>
                            <Grid item xs={3}>
                                <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                    Edytuj
                                </SaveButton>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography component={"span"}>
                                    <HeroSkillsLetters component={"span"}>
                                        {props.character.heroProfession.armorList.join(", ")}
                                    </HeroSkillsLetters>
                                    {/*{props.character.heroProfession.weaponList.map((wpn, key) => (*/}
                                    {/*    <HeroSkillsLetters key={key} component={"span"}> {wpn}</HeroSkillsLetters>*/}
                                    {/*))}*/}
                                </Typography>
                            </Grid>

                        </Grid>
                    </HeroPanelDetails>
                    {open ?
                        <EditArmorDialog open={open} close={handleClose} character={props.character} armors={props.character.armor}
                                         update={props.update}/>
                        : null}
                </HeroPanel>

        </Paper>
    )
}