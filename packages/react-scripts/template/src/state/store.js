import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './reducers.js';
import { rootEpic } from './epics.js';
import { createBrowserHistory } from 'history';

export var store;

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'production')
  store = createStore(
    rootReducer(history),
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  );
else
  store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(history)))
  );

epicMiddleware.run(rootEpic);
