import T from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withFormHandlers from '../../../common/HoC/withFormHandlers.js';
import { ForgotPassword } from './ForgotPassword.js';

export var EnhancedForgotPassword = compose(
  withFormHandlers({
    email: ''
  }),
  pure
)(ForgotPassword);

EnhancedForgotPassword.displayName = 'enhance(ForgotPassword)';

EnhancedForgotPassword.propTypes = {
  onSubmit: T.func.isRequired
};
