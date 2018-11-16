import React from 'react';
import './App.css';
import { Main } from './Main';
import { AuthContainer as Auth } from './Auth';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from '../common/Spinner';
export var App = ({ ready }) => (
  <div>
    {ready === true ? (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route component={Main} />
      </Switch>
    ) : (
      <div className="App__loading">
        <Spinner className="App__loading-spinner" />
      </div>
    )}
  </div>
);
