import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appReducer } from './app';

export var rootReducer = history =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history)
  });

export * from './app';
