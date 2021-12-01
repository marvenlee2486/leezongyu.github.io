import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes';
import HomePage from '../../pages/home/HomePage';
import CpPage from '../../pages/cp/CpPage';
import DsaiPage from '../../pages/dsai/DsaiPage';
import AppBar from '@material-ui/core/AppBar';


/**
 * Stateless component responsible for rendering public or private routes.
 * If user is authenticated, render private routes, otherwise render public routes.
 * */
const Router = () => {
  // render public routes

  return (
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.COMPETITIVE_PROGRAMMING} component={CpPage} />
      <Route exact path={routes.DSAI} component={DsaiPage} />
    </Switch>
  )
}
//<Route path={`${routes.EVENT_INSTANCE}/:eventCode`} component={EventInstancePage} />
//<Route path={`${routes.CREATE_EVENT_INSTANCE}/:eventCode`} component={CreateEventInstancePage} />
   

export default Router;