import React from 'react';
import { Pane } from 'evergreen-ui';
import { Switch, Route } from 'react-router-dom';
import { EnhancedSidebarContainer as SideBar } from './SideBar';
import { MainBarContainer as MainBar } from './MainBar';
import { MainPage } from './MainPage';
import { Page } from './Page';
export var Main = () => (
  <Pane>
    <SideBar />
    <Pane marginLeft={'4em'}>
      <MainBar />
      <Pane width={'calc(100vw - 4em)'} height={'calc(100vh - 4em)'}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </Pane>
    </Pane>
  </Pane>
);
