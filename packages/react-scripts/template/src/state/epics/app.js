import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { history } from '../store';

export var changePage = $action =>
  $action.pipe(
    ofType(`CHANGE_PAGE`),
    switchMap(({ action }) => {
      history.push(`/user/${action.payload}`);

      return of({ type: `CHANGE_PAGE_SUCCESS` });
    })
  );
