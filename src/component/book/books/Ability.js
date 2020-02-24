import React, {useState, useEffect} from "react";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import {ExpansionPanel, withStyles} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import API from "../../API";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
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
export default function Ability() {
    const classes = useStyles();
    const [ability, setAbility] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        let didCancel = false;


        async function fetchAbility() {

            await API.get("ability/all").then(async (response) => {

                if (!didCancel) {
                    const abilities = response.data;
                    setAbility(abilities.abilities);
                    setIsLoading(false);
                }
            }).catch(error => {
                console.log(error)
            });

        }


        fetchAbility();
        return () => {
            didCancel = true;
        };

    }, [isLoading]);

    return (
        <Paper className={classes.root}>
            {isLoading === true ?
                <CircularProgress/> :
                <>
                    {ability.map((ability,key)=>(


                    <Panel key={key} className={classes.expansionPanel}>
                        <PanelSummary key={key} className={classes.expansionPanelContent}>
                            <Typography variant="h5" component="h5" align={"left"}>
                                {ability.name}
                            </Typography>
                        </PanelSummary>
                        <ExpansionPanelDetails key={key}>

                            {ability.description}
                        </ExpansionPanelDetails>


                    </Panel>
                    ))}</>
            }
        </Paper>
    )
}
