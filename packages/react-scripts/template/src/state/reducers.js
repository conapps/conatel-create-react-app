import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ui from './reducers/ui';

export var rootReducer = history =>
  combineReducers({ ui, router: connectRouter(history) });
