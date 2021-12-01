import React from 'react'
import { Container, Grid, Box, Button, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router';
import routes from '../../constants/routes';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
/*
const addRow = (paper: makeStyles ) =>{
    

    <Grid container spacing ={2}>
        <Grid item xs={1} sm={1} md={1} lg={1}>
    
            <Paper className={paper}>
                About Me
            </Paper>
            
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} >
    
            <Paper className={paper}>
                About Me Text (Write About my education)
            </Paper>
            
        </Grid>


    </Grid>
}
*/

const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();
    
    const onClickHandler = ()=>{
        history.push(routes.HOME);
    }

    return (
    <>
    
    <Grid container spacing ={2}>
        <Grid item xs={1} sm={1} md={1} lg={1}>
    
            <Paper className={classes.paper}>
            <Typography variant="h5" align="center" color="primary" component="h2">  About Me</Typography>
            </Paper>
            
        </Grid>
        <Grid item xs={11} sm={11} md={11} lg={11} >
    
            <Paper className={classes.paper}>
                <Typography variant="body1">
                I am Lee Zong Yu. Currently purseing degree of Computer Science Year 2 in Nanyang Technological University. My interest is in Data Science and Artificial Intelligent. Besides, I am very aspired in Competitive Programming as well. 
                </Typography>
            </Paper>
            
        </Grid>


    </Grid>
    
    </>  
    )
}
export default HomePage

/*
<>
    <Grid container spacing ={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
    
            <Paper className={classes.paper}>
                About Me
            </Paper>
            
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2} >
    
            <Paper className={classes.paper}>
                About Me
            </Paper>
            
        </Grid>


    </Grid>
    </> 
    */