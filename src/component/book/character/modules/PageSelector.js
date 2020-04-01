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
import FirstPagePreview from "./preview/FirstPagePreview";
import SecondPagePreview from "./preview/SecondPagePreview";
import ThirdPagePreview from "./preview/ThirdPagePreview";
import FourthPagePreview from "./preview/ForuthPagePreview";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FirstPageEdit from "./edit/FirstPageEdit";
import SecondPageEdit from "./edit/SecondPageEdit";
import ThirdPageEdit from "./edit/ThirdPageEdit";
import FourthPageEdit from "./edit/ForuthPageEdit";


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

export default function PageSelector(props) {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>

            <Grid container spacing={4}>
                <Grid item xs={12}>

                    <Grid container item xs={2} alignItems={"flex-start"}>
                        <FormControlLabel
                            value="bottom"
                            control={<Switch size="small" checked={checked} onChange={toggleChecked}/>}
                            label="Edytuj"
                            labelPlacement="bottom"
                        />


                    </Grid>
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
                        {!checked ?
                            <>
                                < TabPanel value={value} index={0}>
                                    <FirstPagePreview sheet={props.sheet}/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>

                                    <SecondPagePreview sheet={props.sheet}/>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <ThirdPagePreview sheet={props.sheet}/>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <FourthPagePreview sheet={props.sheet}/>
                                </TabPanel>
                            </> :
                            <>
                                < TabPanel value={value} index={0}>
                                    <FirstPageEdit character={props.character}/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <SecondPageEdit character={props.character}/>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <ThirdPageEdit character={props.character}/>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <FourthPageEdit character={props.character}/>
                                </TabPanel>
                            </>
                        }
                    </>

                </Grid>
            </Grid>

        </>
    )

}