import React from 'react';
import { Pane, Image } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { Icon } from '../../../common/Icon/';
import classnames from 'classnames';

export var SideBar = ({ items, pathname, logout }) => (
  <Pane
    className="SideBar"
    position={'fixed'}
    top={0}
    background="#425A70"
    display="flex"
    width={'4em'}
    flexDirection={'column'}
    height={'100vh'}
    elevation={1}
  >
    <Image
      width="3em"
      height="3em"
      margin="0.5em"
      src={logo}
      alt="logo"
      className="Sidebar__logo"
    />

    {items.map(item => (
      <Link
        className={classnames(`Sidebar__link Sidebar__link--${item.color}`, {
          'Sidebar__link--active':
            item.pathname === '/'
              ? pathname === item.pathname
              : pathname.indexOf(item.pathname) === 0,
        })}
        key={item.pathname}
        to={item.pathname}
      >
        <Icon type={item.icon} fill="#FFF" size={2} />
      </Link>
    ))}

    <Icon
      onClick={logout}
      className="Sidebar__link Sidebar__logout"
      type="signOut"
      fill="#FFF"
      size={2}
    />
  </Pane>
);
