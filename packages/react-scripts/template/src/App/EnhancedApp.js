import compose from 'recompose/compose.js';
import { connect } from 'react-redux';
import lifecycle from 'recompose/lifecycle.js';
import pure from 'recompose/pure.js';
import App from './App.js';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

var EnhancedApp = compose(
  withRouter,
  connect(
    state => ({
      ready: get(state, 'app.ready', false),
    }),
    {
      init: () => ({
        type: 'INIT_APP',
      }),
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.init();
    },
  }),
  pure
)(App);

export default EnhancedApp;
EnhancedApp.displayName = 'enhance(App)';
