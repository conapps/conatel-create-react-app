import { combineEpics } from 'redux-observable';

import { login, logout, init } from './app';

export var rootEpic = combineEpics(init, login, logout);
