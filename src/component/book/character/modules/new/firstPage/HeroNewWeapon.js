import React, {useEffect, useState} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper, Tooltip} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {HeroTableCell, HeroTableRow} from "../../../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import {makeStyles} from "@material-ui/core/styles";
import API from "../../../../../API/API";
import Typography from "@material-ui/core/Typography";
import {HeroSkillsLetters, SaveButton} from "../../../../../styles/Styles";
import EditWeaponDialog from "./util/weapon/EditWeaponDialog";

const useStyles = makeStyles((theme) => ({
    borderless: {

        border: 'none',
        fontSize: 11

    },

}));

export default function HeroNewWeapon(props) {
    const classes = useStyles();
    const [isLoadingWeapon, setIsLoadingWeapon] = useState(true);

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Paper elevation={8}>
            {isLoadingWeapon ? null :
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText>
                            Broń
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>

                                <TableContainer>
                                    <Table aria-label="customized table">

                                        <TableHead>
                                            <TableRow>
                                                <HeroTableCell align={"left"}
                                                               className={classes.borderless}>Nazwa</HeroTableCell>
                                                <HeroTableCell align={"left"}
                                                               className={classes.borderless}>Obc.</HeroTableCell>
                                                <HeroTableCell align={"left"}
                                                               className={classes.borderless}>Kategoria</HeroTableCell>
                                                <HeroTableCell align={"left"} className={classes.borderless}>Siła
                                                    broni</HeroTableCell>
                                                <HeroTableCell align={"left"}
                                                               className={classes.borderless}>Zasięg</HeroTableCell>
                                                <HeroTableCell align={"left"}
                                                               className={classes.borderless}>Przeład.</HeroTableCell>
                                                <HeroTableCell align={"left"} className={classes.borderless}>Cechy
                                                    oręża</HeroTableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.character.weapons.map((weapon, key) => (
                                                <HeroTableRow key={key}>
                                                    <HeroTableCell align="center"> {weapon.name} </HeroTableCell>
                                                    <HeroTableCell align="center">{weapon.weight}</HeroTableCell>
                                                    <HeroTableCell align="center"> {weapon.category}</HeroTableCell>
                                                    <HeroTableCell align="center"> {weapon.strength}</HeroTableCell>
                                                    <HeroTableCell
                                                        align="center"> {weapon.rangeMin} - {weapon.rangeMax}</HeroTableCell>
                                                    <HeroTableCell
                                                        align="center"> {weapon.reload === null ? <>Brak</> : weapon.reload}</HeroTableCell>
                                                    <HeroTableCell
                                                        align="center"> {weapon.weaponTrait.map((trait, traitKey) => {
                                                        return (
                                                            <Tooltip title={trait.description} key={traitKey}>
                                                                <Typography key={traitKey}>
                                                                    <i>{trait.name}</i>
                                                                </Typography>

                                                            </Tooltip>

                                                        );
                                                    })}</HeroTableCell>


                                                </HeroTableRow>
                                            ))}


                                        </TableBody>


                                    </Table>
                                </TableContainer>

                            </Grid>
                            <Grid item xs={3}>
                                <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                    Edytuj
                                </SaveButton>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography component={"span"}>
                                    <HeroSkillsLetters component={"span"}>
                                        {props.character.heroProfession.weaponList.join(", ")}
                                    </HeroSkillsLetters>
                                    {/*{props.character.heroProfession.weaponList.map((wpn, key) => (*/}
                                    {/*    <HeroSkillsLetters key={key} component={"span"}> {wpn}</HeroSkillsLetters>*/}
                                    {/*))}*/}
                                </Typography>
                            </Grid>

                        </Grid>
                    </HeroPanelDetails>
                    {open ?
                        <EditWeaponDialog open={open} close={handleClose} character={props.character} weapons={props.character.weapons} update={props.update}/>
                        :null}
                </HeroPanel>

            }
        </Paper>
    )
}