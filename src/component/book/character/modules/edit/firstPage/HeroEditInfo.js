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
import {SaveButton} from "../../../../../styles/Styles";


//TODO moved from traits(since traits have nothing to do with this its based on profession):
// new professions shouldnt be able to over added traits e.g +5 to str should be only +5 in +10 next profession
// also changing profession should eat 100exp
// have to add some cycle in profession to DB to check if everything is oke


export default function HeroEditInfo(props) {
    const [info, setInfo] = useState({
        name: props.character.hero.name,
        race: props.character.hero.race,
        currentProfession: props.character.hero.currentProfession,
        previousProfession: props.character.hero.previousProfession

    });
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [saveButton, setSaveButton] = React.useState(false);
    const loading = open && options.length === 0;


    const handleChange = name => event => {
        setInfo({...info, [name]: event.target.value});
        setSaveButton(true);

    };
    const revertChanges=()=>{
        setInfo({
            name: props.character.hero.name,
            race: props.character.hero.race,
            currentProfession: props.character.hero.currentProfession,
            previousProfession: props.character.hero.previousProfession
        });
        setSaveButton(false)
    };
    const saveCharacterInfo= async ()=>{
        const characterSheetDto={
            name: info.name,
            race: info.race,
            currentProfession: info.currentProfession,
            previousProfession: info.previousProfession
        };
        let character=props.character;
        character.hero=characterSheetDto;


        await API.post("/user/sheet/add",character).then((response)=>{
            const res =response.data;
            setInfo(res.hero);
            setSaveButton(false);
            props.update()
        })

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
            temp.unshift(props.character.hero.currentProfession);


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
                                <HeroTextField id="heroName" label="Imię:" value={info.name}
                                               onChange={handleChange("name")}/>
                                <HeroTextField id="race" label="Rasa:" value={info.race}
                                               onChange={handleChange("race")}/>
                                {/*<HeroTextField id="currentProfession" label="Obecna profesja:" defaultValue={props.info.currentProfession} onChange={handleChange("currentProfession")}/>*/}
                                <Autocomplete

                                    id="asynchronous-demo"
                                    // style={{ width: 300 }}
                                    open={open}
                                    value={info.currentProfession}
                                    disableClearable={true}
                                    getOptionLabel={(option)=>option}
                                    onChange={((event, newValue) => {

                                        // setInfo({...info, currentProfession: newValue});
                                        setSaveButton(true);

                                        if (newValue === props.character.hero.currentProfession) {

                                            setInfo({name: props.character.hero.name,
                                                race: props.character.hero.race,
                                                currentProfession: newValue,
                                                previousProfession: props.character.hero.previousProfession})
                                        } else {
                                            setInfo({name: props.character.hero.name,
                                                race: props.character.hero.race,
                                                currentProfession: newValue,
                                                previousProfession: props.character.hero.currentProfession});
                                        }
                                    })}
                                    onOpen={() => {
                                        setOpen(true);
                                    }}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                    // getOptionSelected={(option, value) => option.name === value.name}
                                    options={options}
                                    loading={loading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Obecna profesja"
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


                                <HeroTextField id="previousProfession" label="Poprzednia profesja:"
                                               value={info.previousProfession}
                                               disabled
                                               onChange={handleChange("previousProfession")}/>
                                {saveButton ?
                                    <>
                                        <SaveButton variant="contained" onClick={revertChanges}>
                                            Anuluj
                                        </SaveButton>
                                        <SaveButton variant="contained" color="primary" onClick={saveCharacterInfo}>
                                            Zapisz
                                        </SaveButton>
                                    </>
                                    : <></>}
                            </Grid>

                        </Grid>


                    </>
                </HeroPanelDetails>
            </HeroPanel>
        </Paper>
    )

}