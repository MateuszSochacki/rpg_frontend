import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TableForTraits from "../../util/TableForTraits";
import Paper from "@material-ui/core/Paper";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import API from "../../API";
import {SlimButton} from './../../styles/Styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Professions() {
    const classes = SearchInputStyle();

    const [allProf, setAllProf] = useState([]);
    const [currentProf, setCurrentProf] = useState([]);
    const [searching, setSearching] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [moreInfo,setMoreInfo]= useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (name) => {
        fetchAbilityByName(name);

        setOpen(true);
    };

    const handleClose = () => {
        setMoreInfo("");
        setOpen(false);
    };

    const filterList = (event) => {
        setSearching(event.target.value);
        let filteredList = allProf;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                event.target.value.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentProf(filteredList);

    };
    const filterListByName = (name) => {
        setSearching(name);
        let filteredList = allProf;
        filteredList = filteredList.filter((item) => {
            return item.name.toString().toLowerCase().search(
                name.toString().toLowerCase()
            ) !== -1;
        });
        setCurrentProf(filteredList);

    };
    const searchFor = (arr) => {
        let components = [];
        for (let i = 0; i < arr.length; i++) {
            components[i] = <SlimButton onClick={() => {
                filterListByName(arr[i])
            }} key={i}>{arr[i]}</SlimButton>;
        }
        return components
    };
    const lookForAbility = (arr) => {
        let components = [];
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase().includes("albo")) {
                let temp = arr[i].split(" albo ");

                components[index] = <SlimButton key={"FirstChoice" + i} onClick={()=>{handleClickOpen(temp[0])}}> {temp[0]}</SlimButton>;
                index++;
                components[index] = " albo ";
                index++;
                components[index] = <SlimButton key={"SecondChoice" + i} onClick={()=>{handleClickOpen(temp[1])}}> {temp[1]}</SlimButton>;
                index++;
            } else {
                components[index] = <SlimButton key={i} onClick={()=>{handleClickOpen(arr[i])}}> {arr[i]}</SlimButton>;
                index++;
            }
        }
        return components;

    };


    async function fetchAbilityByName(name) {

        await API.post("ability/name",{name}).then(async (response) => {


            const protip = response.data;
            setMoreInfo(protip);
        }).catch(error => {
            console.log(error)
        });

    }

    useEffect(() => {

        let didCancel = false;


        async function fetchProfs() {

            await API.get("profession/all").then(async (response) => {

                if (!didCancel) {
                    const prof = response.data;
                    setAllProf(prof.professionDto);

                    setCurrentProf(prof.professionDto);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }

        fetchProfs();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{moreInfo===""?"Pusto lol": moreInfo.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {moreInfo.description}
                    </DialogContentText>
                </DialogContent>

            </Dialog>
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
                {isLoading === true ?
                    <CircularProgress/> :
                    <>
                        {currentProf.map((prof, key) => (


                            <Panel key={key} className={classes.expansionPanel} TransitionProps={{unmountOnExit: true}}>
                                <PanelSummary key={key} className={classes.expansionPanelContent}>
                                    <Typography variant="h5" component="h5" align={"left"}>
                                        {prof.name}
                                    </Typography>
                                </PanelSummary>
                                <ExpansionPanelDetails key={key}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant={"h3"}>
                                                - {prof.name} -
                                            </Typography>
                                            <br/>
                                            <Grid container>
                                                <Grid item xs={3}>
                                                    <Typography variant={"h5"} align={"left"}>
                                                        <b>Opis:</b>
                                                    </Typography>
                                                    <Typography align={"left"}>
                                                        {prof.description}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <img src={prof.img} alt={""} width={"100%"}/>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <TableForTraits mainTraits={prof.mainTraits}
                                                                    secondaryTraits={prof.secondaryTraits}/>

                                                    <br/>
                                                    <Typography align={"left"}>
                                                        <b>Umiejętności: </b>
                                                        {prof.skillList.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Zdolności: </b>

                                                        {lookForAbility(prof.abilityList)}
                                                        {/*{prof.abilityList.join(", ")}.*/}
                                                    </Typography>

                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Wyposażenie: </b>
                                                        {prof.equipmentList.join(", ")}.

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Profesje wstępne: </b>
                                                        {searchFor(prof.inputProf)}

                                                        {/*{prof.inputProf.join(", ")}.*/}

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"}>
                                                        <b>Profesje wyjściowe: </b>

                                                        {searchFor(prof.outputProf)}
                                                        {/*{prof.outputProf.join(", ")}.*/}
                                                    </Typography>
                                                    <br/>

                                                </Grid>
                                            </Grid>


                                            <Typography align={"left"}>
                                                <b>Uwagi: </b> {prof.comment}
                                            </Typography>


                                        </Grid>
                                    </Grid>


                                </ExpansionPanelDetails>


                            </Panel>
                        ))}</>
                }
            </Paper>

        </>
    )
}