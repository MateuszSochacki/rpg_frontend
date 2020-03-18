import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export const SlimButton = withStyles({

    root:{
        textDecoration:"underline",
        textTransform:"none",
        fontSize:"1rem",
        letterSpacing:"0.00938em",
        lineHeight:1.5,
        minWidth:0,

    },
    text:{
        padding:"0 5px 0 0"
    }
})(Button);

export const AlboText = makeStyles({
    textDecoration:"underline",
    textTransform:"none",
    fontSize:"1rem",
    letterSpacing:"0.00938em",
    lineHeight:1.5,
    minWidth:0,
    padding:"0 5px 0 0"
});