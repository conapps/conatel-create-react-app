import compose from 'recompose/compose.js';
import defaultProps from 'recompose/defaultProps.js';
import pure from 'recompose/pure.js';
import get from 'lodash/get';
import { connect } from 'react-redux';
import SideBar from './SideBar.js';
import { LOGOUT } from '../../../state/actions';

var EnhancedSidebar = compose(
  connect(
    state => ({
      pathname: get(state, 'router.location.pathname', '/'),
    }),
    {
      logout: () => ({
        type: LOGOUT,
      }),
    }
  ),
  defaultProps({
    items: [
      { icon: 'dashboard', pathname: '/', color: 'blue' },
      { icon: 'cog', pathname: '/configuration', color: 'orange' },
    ],
  }),
  pure
)(SideBar);

export default EnhancedSidebar;
EnhancedSidebar.displayName = 'enhance(SideBar)';
