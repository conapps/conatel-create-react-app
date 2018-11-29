import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withFormHandlers from '../../../common/HoC/withFormHandlers.js';
import ForgotPassword from './ForgotPassword.js';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { ERROR, NEW_PASSWORD, MESSAGE } from '../../../state/actions';

var EnhancedForgotPassword = compose(
  connect(
    state => ({
      loading: get(state, 'flags.loading.forgotPassword', false),
      error: get(state, 'errors.forgotPassword', null),
      message: get(state, 'messages.forgotPassword', null),
    }),
    {
      onSubmit: payload => ({
        type: NEW_PASSWORD,
        payload,
      }),
      awkError: () => ({
        type: ERROR,
      }),
      awkMessage: () => ({
        type: MESSAGE,
      }),
    }
  ),
  withFormHandlers({
    email: '',
  }),
  pure
)(ForgotPassword);

export default EnhancedForgotPassword;
EnhancedForgotPassword.displayName = 'enhance(ForgotPassword)';
