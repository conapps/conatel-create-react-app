import { combineEpics } from 'redux-observable';

import { login, logout } from './app';

export var rootEpic = combineEpics(login, logout);
