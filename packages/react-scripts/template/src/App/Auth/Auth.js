import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { EnhancedLoginContainer as Login } from './Login/';
import { EnhancedForgotPasswordContainer as ForgotPassword } from './ForgotPassword/';
import { EnhancedRecoverPasswordContainer as RecoverPassword } from './RecoverPassword/';

export var Auth = ({ isAuthenticated }) =>
  isAuthenticated === false ? (
    <div className="Auth">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/forgot-password" component={ForgotPassword} />
        <Route
          exact
          path="/auth/recover-password"
          component={RecoverPassword}
        />
      </Switch>
    </div>
  ) : (
    <Redirect to="/" />
  );
