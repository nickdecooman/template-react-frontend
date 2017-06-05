// @flow

import React from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import styles from './styles.css';

const Main = (props: { children?: any }) => (
  <div className={styles.container}>
    <Header />
    <NavBar />
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
);

Main.defaultProps = {
  children: null,
};

export default Main;
