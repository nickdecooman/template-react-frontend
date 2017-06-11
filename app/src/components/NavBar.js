// @flow
/* eslint react/no-unused-prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getStyle, StyleSheet, css } from '../utils/aphrodite';
import { TEAL_500, WHITE } from '../styles/colors';

type Props = {
  styleSheet?: {
    navBar?: {},
    link?: {},
  },
};

const styles = StyleSheet.create({
  navBar: {
    listStyle: 'none',
    background: TEAL_500,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    padding: '1em',
  },
  link: {
    color: WHITE,
    ':hover': {
      color: '#212121',
    },
  },
});

const NavBar = ({ styleSheet }: Props) => {
  const navBarStyle = getStyle('navBar', styles, styleSheet);
  const linkStyle = getStyle('link', styles, styleSheet);
  return (
    <ul className={css(navBarStyle)}>
      <li>
        <Link to="/" className={css(linkStyle)}>Home</Link>
      </li>
      <li>
        <Link to="/about" className={css(linkStyle)}>About</Link>
      </li>
    </ul>
  );
};

NavBar.defaultProps = {
  styleSheet: {
    navBar: null,
    link: null,
  },
};

export default NavBar;
