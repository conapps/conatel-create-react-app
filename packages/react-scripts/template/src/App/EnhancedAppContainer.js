import { connect } from 'react-redux';
import { EnhancedApp } from './EnhancedApp.js';
import get from 'lodash/get';

var mapStateToProps = state => ({
  ready: get(state, 'app.ready', false)
});

var mapActionsToProps = {
  init: () => ({
    type: 'APP_INIT'
  })
};

export var EnhancedAppContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(EnhancedApp);
EnhancedAppContainer.displayName = 'connect(EnhancedApp)';
