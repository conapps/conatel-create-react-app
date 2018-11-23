import get from 'lodash/get';
import { connect } from 'react-redux';
import getDisplayName from 'recompose/getDisplayName.js';
import { EnhancedSidebar } from './EnhancedSideBar.js';

var mapStateToProps = state => ({
  pathname: get(state, 'router.location.pathname', '/')
});

var actionsToProps = {
  logout: () => ({
    type: 'LOGOUT_REQUEST'
  })
};

export var EnhancedSidebarContainer = connect(
  mapStateToProps,
  actionsToProps
)(EnhancedSidebar);
EnhancedSidebarContainer.displayName = `connect(${getDisplayName(
  EnhancedSidebar
)})`;
