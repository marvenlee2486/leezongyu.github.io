import React from 'react'
import { Container, Grid, Box, Button, Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {styled , makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router';
import routes from '../../constants/routes';
import { ClassNameMap, Styles, WithStylesOptions } from '@material-ui/styles/withStyles';


var _classes :ClassNameMap;
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

interface prop{
    text?:string   
    childComp?: React.ReactNode[];
}

const AddCell: React.FC<prop> = ({text}) =>{
    return(
        <Grid item xs={1} sm={1} md={1} lg={1} >
            <Paper className={_classes.paper}>
                
                <Typography variant="body1">
                    {text}
                    </Typography>
            </Paper>
        </Grid>
    )
}

const AddRow : React.FC<prop> = ({childComp}) =>{
   

{/* <Grid item xs={1} sm={1} md={1} lg={1}>
    
<Paper className={_classes.paper}>
    <Typography variant="h5" align="center" color="primary" component="h2">  {text} </Typography>
</Paper>

</Grid> */}
    return(
    <Grid container spacing ={2}>
        {childComp}

    </Grid>)
}


const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();
    _classes = classes;
    const onClickHandler = ()=>{
        history.push(routes.HOME);
    }

    const text: string = "Lee Zong Yu. From Computer Science Year 2."
    const component: React.ReactNode[] = [<AddCell text= {text} />, <AddCell text={"About Me"} />]

    return (
    <>
    <AddRow childComp = {component} />
    
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