import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { EnhancedAppContainerWithRouter as App } from './App';
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
