import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Panel, PanelSummary} from "../../styles/expansionPanel/Panel";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TableForTraits from "./modules/TableForTraits";
import Paper from "@material-ui/core/Paper";
import {SearchInputStyle} from "../../styles/SearchInputStyle";
import API from "../../API/API";
import {AlboButton, SlimButton} from './../../styles/Styles'
import Dialog from '@material-ui/core/Dialog';
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
    const [moreInfo,setMoreInfo]= useState({
        name:"",
        type:"",
        trait:"",
        description:"",
        relAbility:""
    });
    const [skill,setSkill] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (type,name) => {
        if (type==="ability") {
            fetchAbilityByName(name);
            setSkill(false);
        }else{
            fetchSkillByName(name);
            setSkill(true);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setMoreInfo({
            name:"",
            type:"",
            trait:"",
            description:"",
            relAbility:""
        });
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

                components[index] = <SlimButton key={"FirstChoice" + i} onClick={()=>{handleClickOpen("ability",temp[0])}}> {temp[0]}</SlimButton>;
                index++;
                components[index] = <AlboButton key={"Albo"+i} disabled={true}> albo </AlboButton>;
                index++;
                components[index] = <SlimButton key={"SecondChoice" + i} onClick={()=>{handleClickOpen("ability",temp[1])}}>{temp[1]}</SlimButton>;
                index++;
            } else {
                components[index] = <SlimButton key={i} onClick={()=>{handleClickOpen("ability",arr[i])}}> {arr[i]}</SlimButton>;
                index++;
            }
        }
        return components;

    };

    // const lookForSkill = (arr) => {
    //     let components = [];
    //     let index = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //
    //         if(arr[i].toLowerCase().indexOf("(")>arr[i].toLowerCase().indexOf("albo") || arr[i].indexOf("(")===-1){
    //
    //             if (arr[i].toLowerCase().includes("albo")) {
    //                 let temp = arr[i].split(" albo ");
    //                 for(let j=0; j<temp.length;j++)
    //                 {
    //                     if (temp[j].toLowerCase().includes("(")) {
    //                         let tempBracket = temp[j].substring(0,temp[j].indexOf("("));
    //
    //                         components[index] = <SlimButton key={"FirstChoiceWithBracket" + j} onClick={()=>{handleClickOpen("skill",tempBracket[j])}}> {tempBracket}</SlimButton>;
    //                         index++;
    //                         components[index] = <AlboButton key={"AlboButtonWithinBracket" + j} disabled={true}> {temp[j].substr(temp[j].indexOf("("),temp[j].indexOf(")"))}</AlboButton>;
    //                         index++;
    //                         if (j!==temp.length-1){
    //                             components[index] = <AlboButton key={"AlboButtonWithBracket"+j} disabled={true}>{` albo `}</AlboButton>;
    //                             index++;
    //                         }
    //
    //                     }else{
    //                         components[index] = <SlimButton key={"ChoiceWithoutBracket"+i+j} onClick={()=>{handleClickOpen("skill",temp[j])}}> {temp[j]}</SlimButton>;
    //                         index++;
    //                         if (j!==temp.length-1){
    //                             components[index] = <AlboButton key={"AlboButtonWithoutBracket"+i+j} disabled={true}> albo </AlboButton>;
    //                             index++;
    //                         }
    //                     }
    //
    //
    //                 }
    //
    //             }
    //             else {
    //                 if (arr[i].toLowerCase().includes("(")){
    //                     let tempBracket = arr[i].substring(0,arr[i].indexOf("("));
    //
    //                     components[index] = <SlimButton key={"SkillWithBracket" + i} onClick={()=>{handleClickOpen("skill",tempBracket[i])}}> {tempBracket}</SlimButton>;
    //                     index++;
    //                     components[index] = <AlboButton key={"AlboButtonWithJustBracket" + i} disabled={true}> {arr[i].substr(arr[i].indexOf("("),arr[i].indexOf(")"))}</AlboButton>;
    //                     index++;
    //                 }else{
    //                     if(arr[i].toLowerCase().includes("z:")){
    //                         let comp = [];
    //                         let tempIndex = 0;
    //                         let tempMany = arr[i].split(":");
    //                         // components[index] = <AlboButton key={"fromMany"+i} disabled={true}> {tempMany[0]}: </AlboButton>;
    //                         // index++;
    //                         comp[tempIndex] = <AlboButton key={"fromMany"+i} disabled={true}> {tempMany[0]}: </AlboButton>;
    //                         tempIndex++;
    //                         tempMany = tempMany[1].split(", ");
    //                         for(let j=0;j<tempMany.length;j++){
    //                             comp[tempIndex]=<SlimButton key={"oneFromMany"+j} onClick={()=>{handleClickOpen("skill",tempMany[j])}}> {tempMany[j]}</SlimButton>;
    //                             tempIndex++;
    //                         }
    //                         components[index]=<Typography key={"typography"+i} component={"article"}>{comp}</Typography>
    //                         index++
    //                     }else{
    //                         components[index] = <SlimButton key={"everyOther"+i} onClick={()=>{handleClickOpen("skill",arr[i])}}> {arr[i]}</SlimButton>;
    //                         index++;
    //                     }
    //                 }
    //             }
    //
    //         }
    //         else{
    //
    //             let tempBracket = arr[i].substring(0,arr[i].indexOf("("));
    //
    //             components[index] = <SlimButton key={"FirstChoice" + i} onClick={()=>{handleClickOpen("skill",tempBracket[i])}}> {tempBracket}</SlimButton>;
    //             index++;
    //             components[index] = <AlboButton key={"AlboButton" + i} disabled={true}> {arr[i].substr(arr[i].indexOf("("),arr[i].indexOf(")"))}</AlboButton>;
    //             index++;
    //
    //         }
    //     }
    //     return components;
    //
    // };


    const showCorrect = (arr,what)=>{
        let components = [];
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].toLowerCase().includes("z:")){
                let comp = [];
                let tempIndex = 0;
                let tempMany = arr[i].split(":");
                // components[index] = <AlboButton key={"fromMany"+i} disabled={true}> {tempMany[0]}: </AlboButton>;
                // index++;
                comp[tempIndex] = <AlboButton key={"fromMany"+i} disabled={true}> {tempMany[0]}: </AlboButton>;
                tempIndex++;
                tempMany = tempMany[1].split(", ");
                for(let j=0;j<tempMany.length;j++){
                    if(tempMany[j].toLowerCase().includes("(")){
                        let tempBracket = tempMany[j].substring(0,tempMany[j].indexOf("("));
                        comp[tempIndex]=<SlimButton key={"oneFromMany"+j} onClick={()=>{handleClickOpen(what,tempBracket[j])}}> {tempBracket}</SlimButton>;
                        tempIndex++;
                        comp[tempIndex] = <AlboButton key={"alboButtonWithinBracketOneFromMany" + j} disabled={true}> {tempMany[j].substr(tempMany[j].indexOf("("),tempMany[j].indexOf(")"))}</AlboButton>;
                        tempIndex++;
                    }else{
                    comp[tempIndex]=<SlimButton key={"oneFromMany"+j} onClick={()=>{handleClickOpen(what,tempMany[j])}}> {tempMany[j]}</SlimButton>;
                    tempIndex++;
                    }
                }
                components[index]=<Typography key={"typography"+i} component={"article"}>{comp}</Typography>
                index++
            }else
            if(arr[i].toLowerCase().indexOf("(")>arr[i].toLowerCase().indexOf("albo") || arr[i].indexOf("(")===-1){

                if (arr[i].toLowerCase().includes("albo")) {
                    let temp = arr[i].split(" albo ");
                    for(let j=0; j<temp.length;j++)
                    {
                        if (temp[j].toLowerCase().includes("(")) {
                            let tempBracket = temp[j].substring(0,temp[j].indexOf("("));

                            components[index] = <SlimButton key={"firstChoiceWithBracket" + j} onClick={()=>{handleClickOpen(what,tempBracket[j])}}> {tempBracket}</SlimButton>;
                            index++;
                            components[index] = <AlboButton key={"alboButtonWithinBracket" + j} disabled={true}> {temp[j].substr(temp[j].indexOf("("),temp[j].indexOf(")"))}</AlboButton>;
                            index++;
                            if (j!==temp.length-1){
                                components[index] = <AlboButton key={"alboButtonWithBracket"+j} disabled={true}>{` albo `}</AlboButton>;
                                index++;
                            }

                        }else{
                            components[index] = <SlimButton key={"choiceWithoutBracket"+i+j} onClick={()=>{handleClickOpen(what,temp[j])}}> {temp[j]}</SlimButton>;
                            index++;
                            if (j!==temp.length-1){
                                components[index] = <AlboButton key={"alboButtonWithoutBracket"+i+j} disabled={true}> albo </AlboButton>;
                                index++;
                            }
                        }


                    }

                }
                else {
                    if (arr[i].toLowerCase().includes("(")){
                        let tempBracket = arr[i].substring(0,arr[i].indexOf("("));
                        components[index] = <SlimButton key={"skillWithBracket" + i} onClick={()=>{handleClickOpen(what,tempBracket[i])}}> {tempBracket}</SlimButton>;
                        index++;
                        components[index] = <AlboButton key={"alboButtonWithJustBracket" + i} disabled={true}> {arr[i].substr(arr[i].indexOf("("),arr[i].indexOf(")"))}</AlboButton>;
                        index++;
                    }else{

                            components[index] = <SlimButton key={"everyOther"+i} onClick={()=>{handleClickOpen(what,arr[i])}}> {arr[i]}</SlimButton>;
                            index++;
                        }
                    }


            }            else{

                let tempBracket = arr[i].substring(0,arr[i].indexOf("("));

                components[index] = <SlimButton key={"firstChoice" + i} onClick={()=>{handleClickOpen(what,tempBracket[i])}}> {tempBracket}</SlimButton>;
                index++;
                components[index] = <AlboButton key={"alboButton" + i} disabled={true}> {arr[i].substr(arr[i].indexOf("("),arr[i].indexOf(")"))}</AlboButton>;
                index++;

            }
        }
        return components;

    };










    // const lookForSkill = (arr) => {
    //     let components = [];
    //     let index = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //
    //         if (arr[i].toLowerCase().includes("(")) {
    //             let temp = arr[i].substring(0,arr[i].indexOf("("));
    //
    //             components[index] = <SlimButton key={"FirstChoice" + i} onClick={()=>{handleClickOpen("skill",temp[i])}}> {temp}</SlimButton>;
    //             index++;
    //             components[index] = <AlboButton key={"AlboButton" + i} disabled={true}> {arr[i].substr(arr[i].indexOf("("),arr[i].indexOf(")"))}</AlboButton>;
    //             index++;
    //         } else {
    //             components[index] = <SlimButton key={i} onClick={()=>{handleClickOpen("skill",arr[i])}}> {arr[i]}</SlimButton>;
    //             index++;
    //         }
    //     }
    //     return components;
    //
    // };

    async function fetchSkillByName(name) {

        await API.post("book/skill/name",{name}).then(async (response) => {


            const protip = response.data;
            setMoreInfo(protip);

        }).catch(error => {
            console.log(error)
        });

    }

    async function fetchAbilityByName(name) {

        await API.post("book/ability/name",{name}).then(async (response) => {


            const protip = response.data;
            setMoreInfo(protip);
        }).catch(error => {
            console.log(error)
        });

    }

    useEffect(() => {

        let didCancel = false;


        async function fetchProfs() {

            await API.get("book/profession/all").then(async (response) => {

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
                        {skill?<Typography component={"span"}><b>Typ: </b>{moreInfo.type}<br/></Typography>:null}
                        {skill?<Typography component={"span"}><b>Cecha: </b>{moreInfo.trait}<br/></Typography>:null}


                        <Typography component={"span"}><b>Opis: </b>{moreInfo.description}</Typography><br/>
                        {skill?<Typography component={"span"}><b>Zdolności pokrewne: </b>{moreInfo.relAbility}<br/></Typography>:null}
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
                                                    <Typography align={"left"} component={"div"}>
                                                        <b>Umiejętności: </b>
                                                        {showCorrect(prof.skillList,"skill")}

                                                        {/*{prof.skillList.join(", ")}.*/}

                                                    </Typography>
                                                    <br/>

                                                    <Typography align={"left"} component={"div"}>
                                                        <b>Zdolności: </b>

                                                        {showCorrect(prof.abilityList,"ability")}
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
                                                {prof.comment !==""?<>
                                                    <b>Uwagi: </b> {prof.comment}</>
                                                :null}
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