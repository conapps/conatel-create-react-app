import T from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withFormHandlers from '../../../common/HoC/withFormHandlers';
import { Login } from './Login.js';

export var EnhancedLogin = compose(
  withFormHandlers({
    email: '',
    password: ''
  }),
  pure
)(Login);

EnhancedLogin.displayName = 'enhance(Login)';

EnhancedLogin.propTypes = {
  onSubmit: T.func.isRequired
};
