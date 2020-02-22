import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {ExpansionPanel} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import {fade} from '@material-ui/core/styles/colorManipulator';
import API from '../../API';
import LazyLoad from 'react-lazyload';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.45),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.45),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(9),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing(),
        paddingRight: theme.spacing(),
        paddingBottom: theme.spacing(),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 0,
            '&:focus': {
                width: 220,
            },
        },
        [theme.breakpoints.up('md')]: {
            width: 0,
            '&:focus': {
                width: 120,
            },
        },

    },

}));
const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        // backgroundColor: "#5a5a5a",
        color: theme.palette.common.white,
        height: 0,
        border: "1px solid",
        borderColor: theme.palette.common.black,
        padding: 0,

    },
    body: {
        fontSize: 14,
        height: 0,
        border: "1px solid",
        padding: 0,
    },
    root: {
        textAlign: "center",

    }
}))(TableCell);
const StyledTableCellDiffColor = withStyles(theme => ({
    head: {
        height: 0,
        border: "1px solid",
        borderColor: theme.palette.common.black,
        padding: 0,

    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,

        height: 0,
        border: "1px solid",
        padding: 0,
    },
    root: {
        textAlign: "center",

    }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,

        },

    },
}))(TableRow);
const StyledTableRowDiffColor = withStyles(() => ({
    root: {
        backgroundColor: '#1f1f1e',
    },

}))(TableRow);
const Panel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(ExpansionPanel);
const PanelSummary = withStyles({
    root: {
        // backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(ExpansionPanelSummary);


function Mutations() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState("ALL");
    const [searchValue, setSearchValue] = useState(0);
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

            await API.get("mutation/all").then(async (response) => {


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
                                            <Typography gutterBottom variant="h5" component="h5" align={"left"}>
                                                {mutation.dice} {mutation.name}
                                            </Typography>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography noWrap gutterBottom variant="h5" component="h5" align={"right"}>
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
                                                            {/*{mutation.mutationEffects.map((effect, key) => (*/}


                                                            {/*    <StyledTableRow key={key}>*/}
                                                            {/*        <StyledTableCell component="th" scope="row">*/}
                                                            {/*            {effect.dice}*/}
                                                            {/*        </StyledTableCell>*/}
                                                            {/*        <StyledTableCell*/}
                                                            {/*            align="right">{effect.location}</StyledTableCell>*/}

                                                            {/*        {effect.effect !== null ?*/}
                                                            {/*            <StyledTableCell*/}
                                                            {/*                align="right">{effect.effect}</StyledTableCell>*/}
                                                            {/*            : <StyledTableCell*/}
                                                            {/*                align="right"></StyledTableCell>}*/}
                                                            {/*    </StyledTableRow>*/}

                                                            {/*))}*/}


                                                            {mutation.mutationEffects.map((effect, key) => {

                                                                {
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