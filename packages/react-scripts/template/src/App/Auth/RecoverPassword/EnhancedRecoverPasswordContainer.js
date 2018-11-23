import get from 'lodash/get';
import { connect } from 'react-redux';
import {
  RECOVER_PASSWORD_REQUEST,
  RECOVER_PASSWORD_ERROR_AWK,
  RECOVER_PASSWORD_MESSAGE_AWK
} from '../../../state/actions/';
import { EnhancedRecoverPassword } from './EnhancedRecoverPassword.js';

var mapStateToProps = state => ({
  loading: get(state, 'flags.loading.recoverPassword', false),
  error: get(state, 'errors.recoverPassword', null),
  message: get(state, 'messages.recoverPassword', null)
});

var mapActionsToProps = {
  onSubmit: payload => ({
    type: RECOVER_PASSWORD_REQUEST,
    payload
  }),
  awkError: () => ({
    type: RECOVER_PASSWORD_ERROR_AWK
  }),
  awkMessage: () => ({
    type: RECOVER_PASSWORD_MESSAGE_AWK
  })
};

export var EnhancedRecoverPasswordContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedRecoverPassword);
EnhancedRecoverPasswordContainer.displayName =
  'connect(EnhancedRecoverPassword)';
