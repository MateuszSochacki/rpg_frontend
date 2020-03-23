import {withStyles} from "@material-ui/core/styles";
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
        padding:"0 5px 0 5px"
    }
})(Button);
export const AlboButton = withStyles({
    disabled:{
        color:"#000 !important",
    },
    root:{
        textDecoration:"none",
        textTransform:"none",
        fontSize:"1rem",
        letterSpacing:"0.00938em",
        lineHeight:1.5,
        minWidth:0,


    },

    text:{
        padding:0
    }
})(Button);