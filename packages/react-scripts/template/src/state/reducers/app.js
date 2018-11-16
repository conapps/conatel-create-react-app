import startCase from 'lodash/startCase';
import get from 'lodash/get';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, APP_INIT } from '../actions';
export var appReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case APP_INIT:
      return {
        ...state,
        ready: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logged: false,
      };
    default:
      return { ...state };
  }
};

export var getPage = state => {
  var path = get(state, 'router.location.pathname', '').replace('/', '');
  return path === '' ? 'Home' : startCase(path);
};

export var getUser = state => startCase(get(state, 'app.user', 'username'));
