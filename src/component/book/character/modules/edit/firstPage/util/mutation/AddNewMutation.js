import React, {useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {ArmoryButton, SaveButton} from "../../../../../../../styles/Styles";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import API from "../../../../../../../API/API";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import {HeroTextField, Panel, PanelSummary} from "../../../../../../../styles/expansionPanel/Panel";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
    StyledTableCell, StyledTableCellDiffColor,
    StyledTableRow,
    StyledTableRowDiffColor
} from "../../../../../../../styles/expansionPanel/Table";
import TableBody from "@material-ui/core/TableBody";


//TODO choosing location where exactly mutation occured e.g hand or legs since DB have a slot for location

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddNewMutation(props) {

    const [open, setOpen] = React.useState(false);
    const [mutations, setMutations] = useState([]);
    const [info, setInfo] = useState({
        location:"",
        description:""
    });
    const [unlockMutations, setUnlockMutations] = useState(false);
    const [adjacentMutation, setAdjacentMutation] = useState([]);

    // const [options, setOptions] = React.useState([]);

    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };
    const loading = open && mutations.length === 0;

    useEffect(() => {
        let didCancel = false;

        async function fetchMutations() {
            await API.get("book/mutation/all").then(async (response) => {

                if (!didCancel) {
                    const mutatations = response.data;
                    setMutations(mutatations.mutationDtos);


                }
            }).catch(error => {
                console.log(error)
            });
        }

        fetchMutations();
        return () => {

            didCancel = true;
        };
    }, [loading]);

    // useEffect(() => {
    //     if (!open) {
    //         setMutations([]);
    //     }
    // }, [open]);


    useEffect(() => {
        // setSpellValue(spellOption[0])
    }, [props.character.mutations]);
    useEffect(() => {
    }, []);

    const addMutation = async (mutation) => {

        // console.log(mutation)
        let character = props.character;
        let mutationTable = character.mutations;
        let exist = false;


        mutations.forEach((mut)=>{
            if (mut.dice.indexOf(mutation.dice)!==-1){
                let newMut={
                    name: mut.name,
                    description: info.description,
                    location: info.location,
                    fearPoints: mut.fearPoints
                };
                mutationTable.push(newMut);
                exist=true
            }
        });
        character = {
            ...character,
            mutations: mutationTable
        };
        // console.log(character)
        if (exist) {
            await API.post("/user/sheet/add", character).then(() => {
                props.update();
                props.close();
            });
        }

    };
    const unlockMutation = (roll) => {


        mutations.forEach((mutation,key) => {
            if (mutation.dice.indexOf(roll.dice)!==-1) {
                let adjMutations=[];
                if (key!==0)
                adjMutations.push(mutations[key-1]);
                adjMutations.push(mutations[key]);
                if (mutations[key+1]!==undefined)
                adjMutations.push(mutations[key+1]);

                setAdjacentMutation(adjMutations);
                setUnlockMutations(true);

            }
        })


    }
    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={true}
            maxWidth={"lg"}
            onClose={props.close}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Edycja Mutacji"}</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container>
                        <Grid item xs={6}>
                            <Autocomplete

                                id="asynchronousSpellCat"
                                // style={{ width: 300 }}
                                open={open}
                                // value={info.currentProfession}
                                disableClearable={true}
                                getOptionLabel={(option) => option.dice}
                                onChange={((event, newValue) => {
                                    // setInfo({...info, currentProfession: newValue});
                                    unlockMutation(newValue);

                                })}
                                onOpen={() => {
                                    setOpen(true);
                                }}
                                onClose={() => {
                                    setOpen(false);
                                }}
                                getOptionSelected={(option, value) => option.dice === value.dice}
                                options={mutations}
                                loading={loading}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Rzut kością"
                                        disabled
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                                    {params.InputProps.endAdornment}
                                                </React.Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />


                        </Grid>
                    </Grid>

                    {unlockMutations ?
                        <Grid container>
                            {adjacentMutation.map((mutation, key) => (
                                <Grid item xs={4} key={key}>
                                <Paper elevation={5} key={key}>

                                    {/*<Grid container  style={{borderBottom: "1px solid"}} justify="flex-start"*/}
                                    {/*      alignItems="flex-start">*/}

                                        <Panel TransitionProps={{unmountOnExit: true}} key={key}>
                                            <PanelSummary key={key}>
                                                <Grid container justify="flex-start">
                                                    <Grid item xs={10}>
                                                        <Typography  align={"left"}>
                                                            {mutation.dice} {mutation.name}
                                                        </Typography>

                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography noWrap  align={"right"}>
                                                            <b>
                                                                PS: {mutation.fearPoints}
                                                            </b>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                            </PanelSummary>
                                            <ExpansionPanelDetails key={key}>
                                                <Grid container direction="row" justify="flex-start">
                                                    <Grid item xs={12}>
                                                    {mutation.mutationEffects !== null ?


                                                        <TableContainer component={Paper}>
                                                            <Table aria-label="customized table">
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
                                                    <Grid item xs={12}>
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
                                                </Grid>
                                            </ExpansionPanelDetails>
                                            <ExpansionPanelActions>
                                                <HeroTextField value={info.location} onChange={handleChange("location")}
                                                               label={"Lokacja mutacji"} placeholder={"np.: Lewa noga"}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                <HeroTextField value={info.description} onChange={handleChange("description")}
                                                               label={"Przebieg mutacji"} placeholder={"np.: -8 Ogl"}
                                                               inputProps={{min: 0, style: {textAlign: "center"}}}/>
                                                <SaveButton size="small" onClick={()=>{addMutation(mutation)}}>Dodaj</SaveButton>

                                            </ExpansionPanelActions>

                                        </Panel>



                                    {/*</Grid>*/}

                                </Paper>
                                </Grid>
                            ))}




                        </Grid>
                        : null}
                </Grid>
            </DialogContent>
            <DialogActions>
                <SaveButton onClick={props.close} color="primary">
                    Zamknij
                </SaveButton>

            </DialogActions>

        </Dialog>
    )

}