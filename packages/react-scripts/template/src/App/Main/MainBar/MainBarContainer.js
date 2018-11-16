import { connect } from 'react-redux';
import { MainBar } from './MainBar.js';
import { getPage, getUser } from '../../../state/reducers';
var mapStateToProps = state => ({
  title: getPage(state),
  username: getUser(state),
});

export var MainBarContainer = connect(
  mapStateToProps,
  {}
)(MainBar);
MainBarContainer.displayName = 'connect(MainBar)';
