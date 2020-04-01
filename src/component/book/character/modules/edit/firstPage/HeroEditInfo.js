import React, {useState} from "react";
import {
    HeroPanel,
    HeroPanelDetails,
    HeroPanelSummary,
    HeroText,
    HeroTextField
} from "../../../../../styles/expansionPanel/Panel";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import API from "../../../../../API/API";


export default function HeroEditInfo(props) {
    const [info, setInfo] = useState({
        name: props.info.name,
        race: props.info.race,
        currentProfession: props.info.currentProfession,
        previousProfession: props.info.previousProfession

    });
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;


    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});

    };

    const professionChange=()=>event=>value=>{

        console.log(value.name)

    };

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            let name = info.currentProfession;
            const response = await API.post("/book/profession/name", {name});
            const professions = await response.data;
            const temp = professions.outputProf;
            temp.unshift(props.info.currentProfession);


            if (active) {
                setOptions(temp);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (

        <Paper elevation={8}>

            <HeroPanel expanded={true}>
                <HeroPanelSummary>
                    <HeroText align={"center"}>
                        Bohater
                    </HeroText>
                </HeroPanelSummary>
                <HeroPanelDetails>
                    <>
                        <Grid container>
                            <Grid item xs={12}>
                                <HeroTextField id="heroName" label="Imię:" defaultValue={props.info.name}
                                               onChange={handleChange("name")}/>
                                <HeroTextField id="race" label="Rasa:" defaultValue={props.info.race}
                                               onChange={handleChange("race")}/>
                                {/*<HeroTextField id="currentProfession" label="Obecna profesja:" defaultValue={props.info.currentProfession} onChange={handleChange("currentProfession")}/>*/}
                                <Autocomplete
                                    id="asynchronous-demo"
                                    // style={{ width: 300 }}
                                    open={open}
                                    // onChange={professionChange}
                                    onChange={((event, value) => {
                                        setInfo({...info,currentProfession: value});

                                        if(value===props.info.currentProfession){
                                        setInfo({...info,previousProfession: "Brak"})
                                    }else{
                                        setInfo({...info,previousProfession: props.info.currentProfession});}})}
                                    onOpen={() => {
                                        setOpen(true);
                                    }}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                    getOptionSelected={(option, value) => option.name === value.name}
                                    // getOptionLabel={(option) => option}
                                    defaultValue={props.info.currentProfession}
                                    options={options}
                                    loading={loading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Obecna profesja"
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


                                <HeroTextField id="previousProfession" label="Poprzednia profesja:"
                                               value={info.previousProfession}
                                               onChange={handleChange("previousProfession")}/>
                            </Grid>
                        </Grid>


                    </>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )

}