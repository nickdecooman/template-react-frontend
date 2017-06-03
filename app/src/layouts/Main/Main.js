// @flow

import React from 'react';
import Header from '../../components/Header';
import styles from './styles.css';

const Main = (props: { children: any }) => (
  <div className={styles.container}>
    <Header name="World" />
    {props.children}
  </div>
);

export default Main;
