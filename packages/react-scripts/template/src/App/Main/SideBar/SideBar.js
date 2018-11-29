import './SideBar.css';
import React from 'react';
import { Pane, Image, Icon } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import classnames from 'classnames';

var SideBar = ({ items, pathname, logout }) => (
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
        <Icon icon={item.icon} size={40} color="#FFF" />
      </Link>
    ))}

    <Icon
      onClick={logout}
      className="Sidebar__logout"
      icon="log-out"
      color="#FFF"
      size={25}
    />
  </Pane>
);

export default SideBar;
