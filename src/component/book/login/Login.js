import React from "react";
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import API from "../../API/API";

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

export default function Login(props) {
    const history=useHistory();
    const classes = useStyles();
    const [cred, setCred] = React.useState({
        email:"bjarni123@gmail.com",
        password:"haslo123"
    });
    const signIn = ()=>{


        API.post("login",cred).then((res)=>{
            const token= res.headers.authorization;
            sessionStorage.setItem("jwt",token);
            props.setIsAuthenticated(true);
            history.push("/user/sheet");
        }).catch((error)=>{

        });

    };
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
                                        id="outlined-email"
                                        label="Email"
                                        value={cred.email}
                                        onChange={handleChange("email")}
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
                                <Button className={classes.button} variant="contained" color="primary" onClick={signIn}>
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