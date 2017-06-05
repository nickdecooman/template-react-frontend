// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const NavBar = () => (
  <ul className={styles.navBar}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/other">Other</Link></li>
  </ul>
);

export default NavBar;
