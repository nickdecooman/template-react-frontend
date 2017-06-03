// @flow

import React from 'react';
import logo from './logo.svg';
import styles from './styles.css';

type Props = {
  name: string,
};

const Header = ({ name }: Props) => (
  <div className={styles.header}>
    <img src={logo} className={styles.logo} alt="logo" />
    <h2>Welcome {name}!</h2>
  </div>
);

export default Header;
