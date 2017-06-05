// @flow

import React from 'react';
import logo from './logo.svg';
import styles from './styles.css';
import { Title } from '../Text';

const Header = () => (
  <div className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />
    <Title className={styles.title}>Template React Frontend</Title>
  </div>
);

export default Header;
