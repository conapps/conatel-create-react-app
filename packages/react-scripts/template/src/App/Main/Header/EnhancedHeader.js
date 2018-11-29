import compose from 'recompose/compose';
import Header from './Header';
import { connect } from 'react-redux';
import get from 'lodash/get';
import startCase from 'lodash/startCase';

var EnhancedHeader = compose(
  connect(
    state => ({
      title:
        get(state, 'router.location.pathname', '').replace('/', '') === ''
          ? 'Dashboard'
          : startCase(
              get(state, 'router.location.pathname', '').replace('/', '')
            ),
      username: startCase(get(state, 'app.user', 'username')),
    }),
    {}
  )
)(Header);
export default EnhancedHeader;

EnhancedHeader.displayName = 'enhanced(Header)';
