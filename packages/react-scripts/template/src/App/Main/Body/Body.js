import React from 'react';
import { Pane } from 'evergreen-ui';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import ProfileConfiguration from './ProfileConfiguration/ProfileConfiguration';

var body = () => (
  <Pane display="flex" width="100%">
    <Switch>
      <Route path="/configuration" component={ProfileConfiguration} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Pane>
);

export default body;
