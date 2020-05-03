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
import {SaveButton} from "../../../../../styles/Styles";
import EditWeaponDialog from "./util/weapon/EditWeaponDialog";
import EditArmorDialog from "./util/armor/EditArmorDialog";


export default function HeroEditArmor(props) {

    const [armors, setArmors] = useState([]);
    const [isLoadingArmor, setIsLoadingArmor] = useState(true);

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };
    useEffect(() => {


        let didCancel = false;

        async function fetchArmor(name, type) {

            let armor = "";

            await API.post("book/armor/name", {name, type}).then(async (response) => {

                if (!didCancel) {
                    armor = (response.data);


                }
            }).catch(error => {
                console.log(error)
            });
            return armor;

        };

        async function getAll() {
            return await Promise.all(props.character.armor.map(async (armor) => await (await (fetchArmor(armor.name, armor.type)))));
        }

        getAll().then(data => {
            setArmors(data);
            setIsLoadingArmor(false);


        });


        return () => {
            didCancel = true;
        };

    }, [isLoadingArmor,props.character.armor]);

    return (
        <Paper elevation={8}>
            {isLoadingArmor ? null :
                <HeroPanel expanded={true}>
                    <HeroPanelSummary>
                        <HeroText>
                            pancerz
                        </HeroText>
                    </HeroPanelSummary>
                    <HeroPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>
                                {armors.isEmpty ? null :
                                    <>
                                        {armors.location === "Wszystkie" || armors.location === "wszystkie" ?
                                            <>
                                                <Typography align={"left"}>Opancerzenie proste:</Typography>


                                                <Grid container>
                                                    <Grid item xs={6} style={{
                                                        borderRight: "1px solid",
                                                        borderTop: "1px solid",
                                                        borderBottom: "1px solid"
                                                    }}>
                                                        <HeroTextField id="armorType" label="Typ pancerza: "
                                                                       value={armors.type + ": " + armors.name}/>


                                                    </Grid>

                                                    <Grid item xs={6}
                                                          style={{borderTop: "1px solid", borderBottom: "1px solid"}}>
                                                        <HeroTextField id="armorPoints" label="Punkty zbroi: "
                                                                       value={armors.armorPoints}/>
                                                    </Grid>


                                                </Grid>

                                            </>
                                            :
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

                                                            {armors.map((armor, key) => (


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
                                        }</>}
                            </Grid>
                            <SaveButton variant="contained" color="primary" onClick={handleClickOpen}>
                                Edytuj
                            </SaveButton>
                        </Grid>
                    </HeroPanelDetails>
                    {open ?
                        <EditArmorDialog open={open} close={handleClose} character={props.character} armors={armors} update={props.update}/>
                        :null}
                </HeroPanel>
            }
        </Paper>
    )
}