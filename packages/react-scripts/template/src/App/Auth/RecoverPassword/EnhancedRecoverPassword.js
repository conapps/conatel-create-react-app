import compose from 'recompose/compose';
import withFormHandlers from '../../../common/HoC/withFormHandlers.js';
import pure from 'recompose/pure.js';
import { connect } from 'react-redux';
import get from 'lodash/get';
import RecoverPassword from './RecoverPassword.js';
import { RECOVER_PASSWORD, ERROR, MESSAGE } from '../../../state/actions';
var EnhancedRecoverPassword = compose(
  connect(
    state => ({
      loading: get(state, 'flags.loading.recoverPassword', false),
      error: get(state, 'errors.recoverPassword', null),
      message: get(state, 'messages.recoverPassword', null),
    }),
    {
      onSubmit: payload => ({
        type: RECOVER_PASSWORD,
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
  withFormHandlers(
    {
      password: '',
    },
    {
      handleSubmit: ({
        onSubmit,
        email,
        code,
        formState: { password },
      }) => e => {
        e.preventDefault();
        onSubmit({ email, code, password });
      },
    }
  ),
  pure
)(RecoverPassword);

export default EnhancedRecoverPassword;
EnhancedRecoverPassword.displayName = 'enhance(RecoverPassword)';
