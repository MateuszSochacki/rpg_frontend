import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';


const drawerWidth = 210;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
export default function BookCover(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >

                <List>
                    <Link to={"/mutation"} className={classes.link}>

                        <ListItem button key={"Login"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Login"}/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
                <List>
                    <Link to={"/mutation"} className={classes.link}>
                        <ListItem button key={"Mutacje"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Mutacje"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/equipment"} className={classes.link}>
                        <ListItem button key={"Ekwipunek"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Ekwipunek"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/ability"} className={classes.link}>
                        <ListItem button key={"Zdolności"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Zdolności"}/>
                        </ListItem>
                    </Link>

                </List>
            </Drawer>

            <div className={classes.content}>
                <Grid container spacing={1}>
                    <Grid item xs={1}/>

                    <Grid item xs={10}>
                        <Grid container>
                            {props.children}
                        </Grid>
                    </Grid>

                    <Grid item xs={1}/>


                </Grid>
            </div>
        </div>

    )
}