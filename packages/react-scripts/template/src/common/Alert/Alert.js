import React from 'react';
import T from 'prop-types';
import classnames from 'classnames';

export var Alert = ({ type, onClick, children }) => (
  <div
    onClick={onClick}
    className={classnames('Alert', {
      [type]: !!type,
    })}
  >
    {children}
  </div>
);

Alert.propTypes = {
  type: T.string,
  onClick: T.func,
};

Alert.defaultProps = {
  type: 'default',
};
