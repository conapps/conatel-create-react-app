import compose from 'recompose/compose.js';
import defaultProps from 'recompose/defaultProps.js';
import pure from 'recompose/pure.js';
import { SideBar } from './SideBar.js';

var enhance = compose(
  defaultProps({
    items: [
      { icon: 'tachometer', pathname: '/', color: 'blue' },
      { icon: 'pencil', pathname: '/page', color: 'orange' },
    ],
  }),
  pure
);

export var EnhancedSidebar = enhance(SideBar);
EnhancedSidebar.displayName = 'enhance(SideBar)';
