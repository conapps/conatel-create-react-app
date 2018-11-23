import { connect } from 'react-redux';
import { Auth } from './Auth.js';
import get from 'lodash/get';

var mapStateToProps = state => ({
  isAuthenticated: get(state, 'app.logged', false)
});

export var AuthContainer = connect(
  mapStateToProps,
  {}
)(Auth);
AuthContainer.displayName = 'connect(Auth)';
