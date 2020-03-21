import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper:{
        height:"90vh"
    },
    login:{
        paddingTop:50,
        paddingBottom:50
    },
    button:{
        marginTop: 25
    }
}));
export default function Login() {
    const classes = useStyles();
    const [cred, setCred] = React.useState({
        name:"",
        password:""
    });
    const handleChange = name => event => {
        setCred({...cred, [name]: event.target.value});

    };
    return(
        <>
            <Grid container >
                <Grid item xs={12}>
                    <Grid container className={classes.paper} justify={"center"} alignItems="center">
                        <Grid item xs={3}/>
                        <Grid item xs={6}  >
                            <Paper elevation={4} className={classes.login}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField
                                        id="outlined-name"
                                        label="Nazwa użytkownika"
                                        value={cred.name}
                                        onChange={handleChange("name")}
                                        variant="outlined"
                                    /><br/>
                                    <TextField
                                        id="outlined-password"
                                        label="Hasło"
                                        value={cred.password}
                                        onChange={handleChange("password")}
                                        variant="outlined"
                                    />
                                </form>
                                <Button className={classes.button} variant="contained" color="primary">
                                    Zaloguj
                                </Button>
                            </Paper>

                        </Grid>
                        <Grid item xs={3}/>



                    </Grid>
                </Grid>
            </Grid>
            </>
    )
}