import startCase from 'lodash/startCase';
import get from 'lodash/get';

export var appReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case `CHANGE_PAGE_SUCCESS`:
      return {
        ...state,
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
