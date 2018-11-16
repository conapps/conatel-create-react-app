import get from 'lodash/get';
import { connect } from 'react-redux';
import { LOGIN_REQUEST, LOGIN_ERROR_AWK } from '../../../state/actions';
import { EnhancedLogin } from './EnhancedLogin.js';

var mapStateToProps = state => ({
  loading: get(state, 'flags.loading.login', false),
  error: get(state, 'errors.login', null),
});

var mapActionsToProps = {
  onSubmit: payload => ({
    type: LOGIN_REQUEST,
    payload,
  }),
  awkError: () => ({
    type: LOGIN_ERROR_AWK,
  }),
};

export var EnhancedLoginContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedLogin);

EnhancedLoginContainer.displayName = 'connect(EnhancedLogin)';
