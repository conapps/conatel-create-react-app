import { combineEpics } from 'redux-observable';

import { changePage } from './app';

export var rootEpic = combineEpics(changePage);
