import {ExpansionPanel, withStyles} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export const Panel = withStyles({
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
export const PanelSummary = withStyles({
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

export const HeroPanel = withStyles({
    root: {

        // border: '1px solid rgba(0, 0, 0, .125)',
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

export const HeroPanelSummary = withStyles({
    root: {
        backgroundColor: '#000',
        cursor:"default !important",

        color:"#fff",
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 0,
        '&$expanded': {
            minHeight: 0,

        },
    },
    content: {
        display:"block",
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(ExpansionPanelSummary);

export const HeroPanelDetails = withStyles({
    root: {
        padding:0,

    },
})(ExpansionPanelDetails);

export const HeroText = withStyles({
    root: {

        textTransform:"uppercase",
        fontWeight:700,
    },
})(Typography);

export const HeroTextField = withStyles({
    root: {


        // borderLeft:"1px solid",
        width:"100%"
    },
})(TextField);


export const HeroMiniField = withStyles({
    root: {
        border:"1px solid",
        width:45
    },
})(TextField);