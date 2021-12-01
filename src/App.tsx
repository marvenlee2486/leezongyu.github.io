import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';
import Navigation from 'components/navigation/Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from 'components/router/Router'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div>
      <CssBaseline />

        <Navigation />
        <div className={classes.drawerHeader} />
        <Container maxWidth={false} >
        </Container>

        <Router />
    </div>
  )
}

export default App;
