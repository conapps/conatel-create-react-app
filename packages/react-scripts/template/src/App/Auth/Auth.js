import './Auth.css';
import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import EnhancedLogin from './Login/EnhancedLogin';
import EnhancedForgotPassword from './ForgotPassword/EnhancedForgotPassword';
import EnhancedRecoverPassword from './RecoverPassword/EnhancedRecoverPassword';

var Auth = ({ isAuthenticated = true }) =>
  isAuthenticated === false ? (
    <div className="Auth">
      <Switch>
        <Route exact path="/auth/login" component={EnhancedLogin} />
        <Route
          exact
          path="/auth/forgot-password"
          component={EnhancedForgotPassword}
        />
        <Route
          exact
          path="/auth/recover-password"
          component={EnhancedRecoverPassword}
        />
      </Switch>
    </div>
  ) : (
    <Redirect to="/" />
  );

export default Auth;
