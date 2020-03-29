import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import FirstPage from "./modules/FirstPage";
import SecondPage from "./modules/SecondPage";
import ThirdPage from "./modules/ThirdPage";
import FourthPage from "./modules/ForuthPage";
import API from "../../API/API";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
export default function CharacterSheet() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [charSheet, setCharSheet] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {

        let didCancel = false;

        async function fetchSheets() {

            await API.get("user/sheet/owner").then(async (response) => {

                if (!didCancel) {
                    const sheets = response.data;
                    setCharSheet(sheets.characterSheetsDtos);

                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        };




        fetchSheets();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);
    return (
        <>
            <Paper className={classes.root}>

            <Grid container spacing={4}>
                <Grid item xs={12}>
                    {isLoading ?<CircularProgress/>:

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
                        < TabPanel value = {value} index={0}>
                        <FirstPage sheet={charSheet}/>

                        </TabPanel>
                        <TabPanel value={value} index={1}>

                        <SecondPage/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                        <ThirdPage/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                        <FourthPage/>
                        </TabPanel>
                        </>
                    }
                </Grid>
            </Grid>
            </Paper>

        </>
    )

}