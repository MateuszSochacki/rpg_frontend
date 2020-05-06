import React from 'react';
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';


const drawerWidth = 160;

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

    const history=useHistory();


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


                {props.isAuthenticated? <List>
                        <Link to={"/user/sheet"} className={classes.link}>

                            <ListItem button key={"Karta Postaci"}>
                                {/*<ListItemIcon></ListItemIcon>*/}
                                <ListItemText primary={"Karta Postaci"}/>
                            </ListItem>
                        </Link>
                        {/*<Link to={"/logout"} className={classes.link}>*/}

                        {/*    <ListItem button key={"Wyloguj"}>*/}
                        {/*        /!*<ListItemIcon></ListItemIcon>*!/*/}
                        {/*        <ListItemText primary={"Wyloguj"}/>*/}
                        {/*    </ListItem>*/}
                        {/*</Link>*/}
                    </List>

                :<List>
                        <Link to={"/login"} className={classes.link}>

                            <ListItem button key={"Login"}>
                                {/*<ListItemIcon></ListItemIcon>*/}
                                <ListItemText primary={"Login"}/>
                            </ListItem>
                        </Link>
                        <Link to={"/register"} className={classes.link}>

                            <ListItem button key={"Zarejestruj"}>
                                {/*<ListItemIcon></ListItemIcon>*/}
                                <ListItemText primary={"Zarejestruj"}/>
                            </ListItem>
                        </Link>
                    </List>}
                <Divider/>
                <List>
                    <Link to={"/book/mutation"} className={classes.link}>
                        <ListItem button key={"Mutacje"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Mutacje"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/equipment"} className={classes.link}>
                        <ListItem button key={"Ekwipunek"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Ekwipunek"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/ability"} className={classes.link}>
                        <ListItem button key={"Zdolności"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Zdolności"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/skill"} className={classes.link}>
                        <ListItem button key={"Umiejętności"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Umiejętności"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/spell"} className={classes.link}>
                        <ListItem button key={"Zaklęcia"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Zaklęcia"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/beast"} className={classes.link}>
                        <ListItem button key={"Bestiariusz"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Bestiariusz"}/>
                        </ListItem>
                    </Link>
                    <Link to={"/book/profession"} className={classes.link}>
                        <ListItem button key={"Profesje"}>
                            {/*<ListItemIcon></ListItemIcon>*/}
                            <ListItemText primary={"Profesje"}/>
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