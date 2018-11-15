import React from 'react';
import './App.css';
import { Main } from './Main';
import { Switch, Route } from 'react-router-dom';
export var App = () => (
  <Switch>
    <Route component={Main} />
  </Switch>
);
