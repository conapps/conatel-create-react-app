import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppWithRouter as App } from './App/AppWithRouter';
import registerServiceWorker from './App/registerServiceWorker';
import { Provider } from 'react-redux';
import { store, history } from './state/';
import { ConnectedRouter as Router } from 'connected-react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
