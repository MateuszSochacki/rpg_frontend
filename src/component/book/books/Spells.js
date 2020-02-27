import React, {useEffect, useState} from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Paper from "@material-ui/core/Paper";
import CategoryFromList from "./equipment/CategoryFromList";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import API from "../../API";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
    StyledTableCell,
    StyledTableRow,
} from "../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";


export default function Spells() {
    const classes = SearchInputStyle();

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [allSpell, setAllSpell] = useState([]);
    const [currentSpell, setCurrentSpell] = useState([]);
    const [searching, setSearching] = useState([]);


    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allSpell;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCategory(CategoryFromList(filteredList));

        setCurrentSpell(filteredList);

    };

    useEffect(() => {
        let didCancel = false;


        async function fetchSpell() {

            await API.get("spell/all").then(async (response) => {

                if (!didCancel) {
                    const spells = response.data;
                    setAllSpell(spells.spellDtos);

                    setCurrentSpell(spells.spellDtos);

                    setCategory(CategoryFromList(spells.spellDtos));

                    setIsLoading(false);

                }
            }).catch(error => {
                console.log(error)
            });

        }


        fetchSpell();
        return () => {
            didCancel = true;
        };
    }, [isLoading]);

    return (
        <Paper className={classes.root}>
            <Grid container alignItems={"center"} justify={"flex-start"}>
                <Grid item xs={9}>
                </Grid>
                <Grid item xs={3}>
                    <Grid container>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                onChange={filterList}
                                value={searching}
                                placeholder="Wyszukaj.."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            {category.map((cat, key) => (
                <Panel key={key}>
                    <PanelSummary key={key} className={classes.expansionPanel}>
                        <Typography variant="h5" component="h5" align={"left"}>
                        {cat}
                        </Typography>
                    </PanelSummary>
                    {currentSpell.map((spell, key) => {

                        if (spell.type === cat)
                            return (
                                <ExpansionPanelDetails key={key} className={classes.expansionPanelContent}>
                                    <Grid container direction="row" justify="flex-start">
                                        <Grid item xs={7}>
                                            <Typography align={"left"}>
                                                <b>Nazwa:</b> {spell.name}
                                            </Typography>
                                            {spell.domain === null ? null :
                                                <Typography align={"left"}>
                                                    <b>Domena:</b> {spell.domain}
                                                </Typography>
                                            }
                                            <Typography align={"left"}>
                                                <b>Czas rzucania:</b> {spell.castingTime}
                                            </Typography>
                                            <Typography align={"left"}>
                                                <b>Składnik:</b> {spell.ingredient}
                                            </Typography>
                                            <Typography align={"left"}>
                                                <b>Wymagany poziom mocy:</b> {spell.reqPower}
                                            </Typography>

                                            <Typography align={"left"}>
                                                <b>Czas trwania:</b> {spell.duration}
                                            </Typography>
                                            {spell.description === null ? null :
                                                <Typography align={"left"}>
                                                    <b>Opis:</b> {spell.description}
                                                </Typography>

                                            }
                                        </Grid>
                                        <Grid item xs={5}>
                                            {spell.table !== null ?

                                                <TableContainer component={Paper}>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Rzut</StyledTableCell>
                                                                <StyledTableCell align="right">Efekt</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {spell.table.map((effect, key) => (
                                                                <StyledTableRow key={key}>
                                                                    <StyledTableCell component="th"
                                                                                     scope="row">
                                                                        {effect.dice}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell
                                                                        align="right">{effect.effect}</StyledTableCell>


                                                                </StyledTableRow>
                                                            ))}

                                                        </TableBody>


                                                    </Table>
                                                </TableContainer>
                                                : null}


                                        </Grid>
                                    </Grid>

                                </ExpansionPanelDetails>
                            )
                    })}


                </Panel>
            ))
            }
        </Paper>
    );
}