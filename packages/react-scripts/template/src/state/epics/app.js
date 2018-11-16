import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { history } from '../store';
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../actions';

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

      return of({ type: LOGOUT_SUCCESS });
    })
  );
