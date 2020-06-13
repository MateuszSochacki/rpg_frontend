import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FirstPageNew from "./FirstPageNew";
import SecondPageNew from "./SecondPageNew";
import ThirdPageNew from "./ThirdPageNew";
import FourthPageNew from "./FourthPageNew";
import {SaveButton} from "../../../../styles/Styles";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

export default function NewCharacterSheet(props) {
    const [value, setValue] = useState(0);
    const [character, setCharacter]= useState({
        hero:"",
        description:"",
        traits:"",
        weapon:"",
        armor:"",
        player:"",
        experiencePoints:"",
        movement:"",
        armorPoints:"",
        skill:"",
        ability:"",
        equipment:"",
        heroProfession:"",
        money:"",
        spell:"",
        mutations:"",
    });


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const saveChar = () => {
        console.log(character)
    };
    const [checked, setChecked] = React.useState(false);



    return (
        <>

            <Grid container spacing={4}>
                <Grid item xs={12}>


                    <>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Postać" icon={<FavoriteIcon/>} {...a11yProps(0)}/>
                            <Tab label="Umiejętności/Zdolności" icon={<FavoriteIcon/>} {...a11yProps(1)}/>
                            <Tab label="Zaklęcia" icon={<FavoriteIcon/>} {...a11yProps(2)}/>
                            <Tab label="Mutacje" icon={<FavoriteIcon/>} {...a11yProps(3)}/>

                        </Tabs>

                            <>
                                < TabPanel value={value} index={0}>
                                    <FirstPageNew character={character} setChar={setCharacter}/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>

                                    <SecondPageNew character={character} setChar={setCharacter}/>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <ThirdPageNew character={character} setChar={setCharacter}/>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <FourthPageNew character={character} setChar={setCharacter}/>
                                </TabPanel>
                            </>
                        <SaveButton onClick={saveChar}> Zapisz</SaveButton>

                    </>

                </Grid>
            </Grid>

        </>
    )

}