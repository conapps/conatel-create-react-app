import React from 'react';
import T from 'prop-types';

var INVALID_ICON_TYPE = () => <span>Invalid icon type</span>;

var icons = {
  signOut: require('./Icons/SignOut.js').default,
  tachometer: require('./Icons/Tachometer.js').default,
  pencil: require('./Icons/Pencil.js').default
};

export var Icon = ({ type, ...props }) => {
  var Component = icons[type] || INVALID_ICON_TYPE;

  return React.createElement(Component, props);
};

Icon.propTypes = {
  type: T.string.isRequired,
  fill: T.string,
  size: T.number,
  className: T.string,
  onClick: T.func
};

Icon.defaultProps = {
  fill: '#000',
  size: 1
};
