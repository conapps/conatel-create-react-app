import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import { Link } from 'react-router-dom';
export var MainBar = ({ title, username }) => (
  <Pane
    className="MainBar"
    width={'calc(100vw - 4em)'}
    display="flex"
    padding={16}
    background="white"
    borderRadius={3}
    height={'4em'}
    elevation={1}
  >
    <Pane flex={1} alignItems="center" display="flex">
      <Heading size={600}>{title}</Heading>
    </Pane>
    <Pane marginRight={16} marginTop={'0.5em'}>
      <Link to="/">{username}</Link>
    </Pane>
  </Pane>
);
