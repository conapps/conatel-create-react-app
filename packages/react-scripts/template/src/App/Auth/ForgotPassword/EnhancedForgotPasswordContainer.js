import get from 'lodash/get';
import { connect } from 'react-redux';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_ERROR_AWK,
  FORGOT_PASSWORD_MESSAGE_AWK
} from '../../../state/actions/';
import { EnhancedForgotPassword } from './EnhancedForgotPassword.js';

var mapStateToProps = state => ({
  loading: get(state, 'flags.loading.forgotPassword', false),
  error: get(state, 'errors.forgotPassword', null),
  message: get(state, 'messages.forgotPassword', null)
});

var mapActionsToProps = {
  onSubmit: payload => ({
    type: FORGOT_PASSWORD_REQUEST,
    payload
  }),
  awkError: () => ({
    type: FORGOT_PASSWORD_ERROR_AWK
  }),
  awkMessage: () => ({
    type: FORGOT_PASSWORD_MESSAGE_AWK
  })
};

export var EnhancedForgotPasswordContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedForgotPassword);

EnhancedForgotPasswordContainer.displayName = 'connect(EnhancedForgotPassword)';
