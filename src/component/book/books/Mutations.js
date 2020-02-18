import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    expansionPanel: {
        margin: 0,
        '&$expanded': {
            margin: 0,
        },

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
const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,

        },

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




export default function Mutations() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                                // onChange={}
                                // value={}
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


            <Panel TransitionProps={{unmountOnExit: true}} className={classes.expansionPanel}>
                <PanelSummary key={1} className={classes.expansionPanelContent}>
                    <Grid container justify="flex-start">
                        <Grid item xs={10}>
                            <Typography gutterBottom variant="h5" component="h5" align={"left"}>
                                001-005 Albinos
                            </Typography>

                        </Grid>
                        <Grid item xs={2}>
                            <Typography noWrap gutterBottom variant="h5" component="h5" align={"right"}>
                                <b>
                                    PS: 0
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>

                </PanelSummary>
                <ExpansionPanelDetails key={1}>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item xs={7}>
                            <Typography align={"left"}>
                                <b>Bóg:</b> Brak
                            </Typography>
                            <Typography align={"left"}>
                                <b>Typ:</b> Pojedyńcza.
                            </Typography>
                            <Typography align={"left"}>
                                <b>Opis:</b> Twoja skóra staje się mlecznobiała, a oczy czerwone. Tracisz 1k10 punktów
                                Odpornośi otrzymujesz modyfikator -5 do testów spostrzegawczości związanych ze wzrokiem,
                                wykonywanych w jasnym świetle.
                            </Typography>
                            <br/>
                            {/*if variant then*/}
                            <Typography align={"left"}>
                                <b>Wariant:</b> Topens kekens
                            </Typography>
                            <Typography/>
                            {/*}*/}
                            {/*if comment then*/}
                            <Typography align={"left"}>
                                <b>Komentarz:</b> Komentarz
                            </Typography>
                            <Typography/>
                            {/*}*/}
                        </Grid>
                        <Grid item xs={5}>
                            {/* if mutationeffects is not null then*/}


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
                                        {/* map for list */}
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        {/*end map*/}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>


            </Panel>
            <Panel TransitionProps={{unmountOnExit: true}} className={classes.expansionPanel}>
                <PanelSummary key={1} className={classes.expansionPanelContent}>
                    <Grid container justify="flex-start">
                        <Grid item xs={10}>
                            <Typography gutterBottom variant="h5" component="h5" align={"left"}>
                                001-005 Albinos
                            </Typography>

                        </Grid>
                        <Grid item xs={2}>
                            <Typography noWrap gutterBottom variant="h5" component="h5" align={"right"}>
                                <b>
                                    PS: 0
                                </b>
                            </Typography>
                        </Grid>
                    </Grid>

                </PanelSummary>
                <ExpansionPanelDetails key={1}>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item xs={7}>
                            <Typography align={"left"}>
                                <b>Bóg:</b> Brak
                            </Typography>
                            <Typography align={"left"}>
                                <b>Typ:</b> Pojedyńcza.
                            </Typography>
                            <Typography align={"left"}>
                                <b>Opis:</b> Twoja skóra staje się mlecznobiała, a oczy czerwone. Tracisz 1k10 punktów
                                Odpornośi otrzymujesz modyfikator -5 do testów spostrzegawczości związanych ze wzrokiem,
                                wykonywanych w jasnym świetle.
                            </Typography>
                            <br/>
                            {/*if variant then*/}
                            <Typography align={"left"}>
                                <b>Wariant:</b> Topens kekens
                            </Typography>
                            <Typography/>
                            {/*}*/}
                            {/*if comment then*/}
                            <Typography align={"left"}>
                                <b>Komentarz:</b> Komentarz
                            </Typography>
                            <Typography/>
                            {/*}*/}
                        </Grid>
                        <Grid item xs={5}>
                            {/* if mutationeffects is not null then*/}


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
                                        {/* map for list */}
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow key={1}>
                                            <StyledTableCell component="th" scope="row">
                                                001-100
                                            </StyledTableCell>
                                            <StyledTableCell align="right">Głowa</StyledTableCell>
                                            <StyledTableCell align="right">Pęcznieje</StyledTableCell>
                                        </StyledTableRow>
                                        {/*end map*/}
                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>


            </Panel>


            {/*<Tabs*/}
            {/*    value={value}*/}
            {/*    onChange={handleChange}*/}
            {/*    indicatorColor="primary"*/}
            {/*    textColor="primary"*/}
            {/*    centered*/}
            {/*>*/}
            {/*    <Tab label="Item One"/>*/}
            {/*    <Tab label="Item Two"/>*/}
            {/*    <Tab label="Item Three"/>*/}
            {/*    <Tab label="Item Three"/>*/}
            {/*</Tabs>*/}
        </Paper>
    )
}