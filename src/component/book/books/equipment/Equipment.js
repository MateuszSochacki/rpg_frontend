import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Weapons from './Weapons';
import API from "../../../API";
import CircularProgress from "@material-ui/core/CircularProgress";
import Armors from "./Armors";
import Others from "./Others";


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


export default function Equipment() {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [weapon, setWeapon] = useState([]);
    const [armor, setArmor] = useState([]);
    const [other, setOther] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {

        let didCancel = false;

        async function fetchEquipment() {

            await API.get("weapon/all").then(async (response) => {

                if (!didCancel) {
                    const weapons = response.data;
                    setWeapon(weapons.weapons);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

            await API.get("armor/all").then(async (response) => {

                if (!didCancel) {
                    const armors = response.data;
                    setArmor(armors.armors);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

            await API.get("equipment/all").then(async (response) => {

                if (!didCancel) {
                    const eq = response.data;
                    setOther(eq.equipments);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });
        }


        fetchEquipment();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Broń" icon={<FavoriteIcon />} {...a11yProps(0)}/>
                <Tab label="Pancerz" icon={<FavoriteIcon />} {...a11yProps(1)}/>
                <Tab label="Pozostałe" icon={<FavoriteIcon />} {...a11yProps(2)}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                {isLoading
                    ?
                    <CircularProgress/>
                    :
                    <Weapons weapons={weapon}/>
                }

            </TabPanel>
            <TabPanel value={value} index={1}>
                {isLoading
                    ?
                    <CircularProgress/>
                    :
                    <Armors armors={armor}/>
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {isLoading
                    ?
                    <CircularProgress/>
                    :
                    <Others others={other}/>
                }
            </TabPanel>
        </Paper>
    );

}