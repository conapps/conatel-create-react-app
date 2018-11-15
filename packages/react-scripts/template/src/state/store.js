import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './reducers/';
import { rootEpic } from './epics/';
import { createBrowserHistory } from 'history';

export var store;

export var history = createBrowserHistory();

var rootEpicMiddleware = createEpicMiddleware();

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'production')
  store = createStore(
    rootReducer(history),
    applyMiddleware(rootEpicMiddleware, routerMiddleware(history))
  );
else
  store = createStore(
    rootReducer(history),
    composeEnhancers(
      applyMiddleware(rootEpicMiddleware, routerMiddleware(history))
    )
  );

rootEpicMiddleware.run(rootEpic);
