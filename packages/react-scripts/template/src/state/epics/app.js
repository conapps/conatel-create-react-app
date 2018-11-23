import { of, empty } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { history } from '../store';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  APP_INIT,
} from '../actions';

export var init = ($action, store) =>
  $action.pipe(
    ofType(APP_INIT),
    switchMap(() => {
      var logged = localStorage.getItem('logged');
      if (logged) {
        history.push(`/`);
      } else {
        history.push(`/auth/login`);
      }
      return empty();
    })
  );

export var login = $action =>
  $action.pipe(
    ofType(LOGIN_REQUEST),
    switchMap(() => {
      history.push(`/`);

      return of({ type: LOGIN_SUCCESS });
    })
  );

export var logout = $action =>
  $action.pipe(
    ofType(LOGOUT_REQUEST),
    switchMap(() => {
      history.push(`/auth/login`);
      window.localStorage.clear();
      return of({ type: LOGOUT_SUCCESS });
    })
  );
