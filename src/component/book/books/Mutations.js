import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import API from "../../API/API";
import LazyLoad from 'react-lazyload';
import CircularProgress from '@material-ui/core/CircularProgress';
import {SearchInputStyle} from './../../styles/SearchInputStyle';
import {Panel,PanelSummary} from "../../styles/expansionPanel/Panel";
import {StyledTableCell,StyledTableCellDiffColor,StyledTableRowDiffColor,StyledTableRow} from "../../styles/expansionPanel/Table";



function Mutations() {
    const classes = SearchInputStyle();
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState("ALL");
    const [searchValue, setSearchValue] = useState("");
    const [allMutations, setAllMutations] = useState([]);
    const [currentMutations, setCurrentMutations] = useState([]);
    const [currentMutationsAfterSearch, setCurrentMutationsAfterSearch] = useState([]);
    const [nurgleMutations] = useState([]);
    const [slaaneshMutations] = useState([]);
    const [khornMutations] = useState([]);
    const [tzeentchMutations] = useState([]);


    const handleChange = (event) => {
        setValue(event.target.value);
        showMutation(event.target.value);
        setSearchValue("");
    };


    const filterMutationList = (event) => {
        setSearchValue(event.target.value);
        let filteredList = currentMutations;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentMutationsAfterSearch(filteredList);
    };
    const showMutation = (String) => {
        switch (String) {
            case "NURGLE": {
                setCurrentMutations(nurgleMutations);
                setCurrentMutationsAfterSearch(nurgleMutations);
                break;
            }
            case "KHORN": {
                setCurrentMutations(khornMutations);
                setCurrentMutationsAfterSearch(khornMutations);
                break;
            }
            case "SLAANESH": {
                setCurrentMutations(slaaneshMutations);
                setCurrentMutationsAfterSearch(slaaneshMutations);
                break;
            }
            case "TZEENTCH": {
                setCurrentMutations(tzeentchMutations);
                setCurrentMutationsAfterSearch(tzeentchMutations);
                break;
            }
            case "ALL": {
                setCurrentMutations(allMutations);
                setCurrentMutationsAfterSearch(allMutations);
                break;
            }
            default:
                console.log("sie zjebalo");


        }

    };

    const filterMutation = () => {


        allMutations.map((mutation) => {
            switch (mutation.god) {
                case "Khorn": {

                    return khornMutations.push(mutation);
                }
                case "Nurgle": {
                    return nurgleMutations.push(mutation);
                }
                case "Slaanesh": {
                    return slaaneshMutations.push(mutation);
                }
                case "Tzeentch": {
                    return tzeentchMutations.push(mutation);
                }

                default: {
                    return allMutations
                }


            }
        })
    };

    useEffect(() => {

        let didCancel = false;


        async function fetchMutation() {

            await API.get("book/mutation/all").then(async (response) => {


                if (!didCancel) {
                    const mutations = response.data;
                    setAllMutations(mutations.mutationDtos);
                    setCurrentMutationsAfterSearch(currentMutations);
                    showMutation(value);
                    filterMutation();
                    setIsLoading(false);
                }


            }).catch(error => {
                console.log(error)
            });
        }


        fetchMutation();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);
    return (


        <Paper className={classes.root}>

            <Grid container alignItems={"center"} justify={"flex-start"}>
                <Grid item xs={9}>

                    <div className={classes.paper}>
                        <FormControl>
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={value}
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="ALL"
                                    control={<Radio color="default"/>}
                                    label="Mutacje"
                                />
                                <FormControlLabel
                                    value="KHORN"
                                    control={<Radio color="default"/>}
                                    label="Mutacje Khorna"
                                />
                                <FormControlLabel
                                    value="NURGLE"
                                    control={<Radio color="default"
                                    />}
                                    label="Mutacje Nurgla"
                                />
                                <FormControlLabel
                                    value="SLAANESH"
                                    control={<Radio color="default"
                                    />}
                                    label="Mutacje Slaanesha"
                                />
                                <FormControlLabel
                                    value="TZEENTCH"
                                    control={<Radio color="default"
                                    />}
                                    label="Mutacje Tzeentcha"
                                />
                            </RadioGroup>
                        </FormControl>

                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Grid container>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                onChange={filterMutationList}
                                value={searchValue}
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

            {isLoading !== true ?

                <>
                    {currentMutationsAfterSearch.map((mutation, key) => (
                        <LazyLoad height={'100%'} key={key}>
                            <Panel TransitionProps={{unmountOnExit: true}} className={classes.expansionPanel} key={key}>
                                <PanelSummary key={key} className={classes.expansionPanelContent}>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={10}>
                                            <Typography  variant="h5" component="h5" align={"left"}>
                                                {mutation.dice} {mutation.name}
                                            </Typography>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography noWrap  variant="h5" component="h5" align={"right"}>
                                                <b>
                                                    PS: {mutation.fearPoints}
                                                </b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                </PanelSummary>
                                <ExpansionPanelDetails key={key}>
                                    <Grid container direction="row" justify="flex-start">
                                        <Grid item xs={7}>
                                            <Typography align={"left"}>
                                                <b>Bóg:</b> {mutation.god !== null ? mutation.god : "Brak"}
                                            </Typography>
                                            <Typography align={"left"}>
                                                <b>Typ:</b> {mutation.type}
                                            </Typography>
                                            <Typography align={"left"}>
                                                <b>Opis:</b> {mutation.description}
                                            </Typography>
                                            <br/>
                                            {mutation.variants !== null ?
                                                <Typography align={"left"}>
                                                    <b>Wariant:</b> {mutation.variants}
                                                </Typography>
                                                : null}
                                            <Typography/>

                                            {mutation.comments !== null ?
                                                <Typography align={"left"}>
                                                    <b>Komentarz:</b> Komentarz
                                                </Typography>
                                                : null}
                                            <Typography/>
                                        </Grid>
                                        <Grid item xs={5}>
                                            {/* if mutationeffects is not null then*/}
                                            {mutation.mutationEffects !== null ?


                                                <TableContainer component={Paper}>
                                                    <Table className={classes.table} aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell>Rzut</StyledTableCell>
                                                                <StyledTableCell align="right">Lokacja</StyledTableCell>
                                                                <StyledTableCell align="right">Efekt</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>


                                                            {mutation.mutationEffects.map((effect, key) => {


                                                                    if (effect.effect !== "1") {
                                                                        return (
                                                                            <StyledTableRow key={key}>
                                                                                <StyledTableCell component="th"
                                                                                                 scope="row">
                                                                                    {effect.dice}
                                                                                </StyledTableCell>
                                                                                <StyledTableCell
                                                                                    align="right">{effect.location}</StyledTableCell>

                                                                                <StyledTableCell
                                                                                    align="right">{effect.effect !== "1" ? effect.effect : null}</StyledTableCell>

                                                                            </StyledTableRow>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <StyledTableRowDiffColor key={key}>
                                                                                <StyledTableCellDiffColor component="th"
                                                                                                          scope="row">
                                                                                    {effect.dice}
                                                                                </StyledTableCellDiffColor>
                                                                                <StyledTableCellDiffColor
                                                                                    align="right">{effect.location}</StyledTableCellDiffColor>

                                                                                <StyledTableCellDiffColor
                                                                                    align="right">{effect.effect !== "1" ? effect.effect : null}</StyledTableCellDiffColor>

                                                                            </StyledTableRowDiffColor>
                                                                        )
                                                                    }



                                                            })}
                                                        </TableBody>


                                                    </Table>
                                                </TableContainer>
                                                : null}


                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>


                            </Panel>
                        </LazyLoad>
                    ))}

                </> : <CircularProgress/>}

        </Paper>
    )
}

export default Mutations;