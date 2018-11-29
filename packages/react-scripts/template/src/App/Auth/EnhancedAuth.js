import compose from 'recompose/compose';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Auth from './Auth.js';

var EnhancedAuth = compose(
  connect(
    state => ({
      isAuthenticated: get(state, 'ui.logged', false),
    }),
    {}
  )
)(Auth);

export default EnhancedAuth;
EnhancedAuth.displayName = 'enhance(Auth)';
