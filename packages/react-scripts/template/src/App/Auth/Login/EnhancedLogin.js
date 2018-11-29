import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withFormHandlers from '../../../common/HoC/withFormHandlers';
import { connect } from 'react-redux';
import Login from './Login.js';
import get from 'lodash/get';
import { LOGIN, ERROR } from '../../../state/actions';

var EnhancedLogin = compose(
  connect(
    state => ({
      loading: get(state, 'flags.loading.login', false),
      error: get(state, 'errors.login', null),
    }),
    {
      onSubmit: payload => ({
        type: LOGIN,
        payload,
      }),
      awkError: () => ({
        type: ERROR,
      }),
    }
  ),
  withFormHandlers({
    email: '',
    password: '',
  }),
  pure
)(Login);

export default EnhancedLogin;
EnhancedLogin.displayName = 'enhance(Login)';
