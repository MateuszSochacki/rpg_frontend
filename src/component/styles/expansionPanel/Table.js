import {withStyles} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        // backgroundColor: "#5a5a5a",
        color: theme.palette.common.white,
        height: 0,
        border: "1px solid",
        borderColor: theme.palette.common.black,
        padding: 0,

    },
    body: {
        fontSize: 14,
        height: 0,
        border: "1px solid",
        borderColor: theme.palette.common.black,
        width:"12.5%",
        padding: 0,
    },
    root: {
        textAlign: "center",
        "&:last-child": {
            paddingRight: 0
        }

    }
}))(TableCell);
export const StyledTableCellDiffColor = withStyles(theme => ({
    head: {
        height: 0,
        border: "1px solid",
        borderColor: theme.palette.common.black,
        padding: 0,

    },
    body: {
        fontSize: 14,
        color: theme.palette.common.white,
        borderColor: theme.palette.common.black,

        height: 0,
        border: "1px solid",
        padding: 0,
    },
    root: {
        textAlign: "center",

    }
}))(TableCell);
export const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,

        },

    },
}))(TableRow);
export const StyledTableRowDiffColor = withStyles(() => ({
    root: {
        backgroundColor: '#1f1f1e',
    },

}))(TableRow);