// @flow

import * as React from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { StyleSheet, css } from '../../utils/aphrodite';
import { BLACK, AMBER_500 } from '../../styles/colors';
import logo from './logo.svg';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    paddingTop: '2em',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
});

const navBarStyles = StyleSheet.create({
  link: {
    color: BLACK,
    ':hover': {
      color: AMBER_500,
    },
  },
});

const Main = (props: { children?: React.Node }) => (
  <div className={css(styles.container)}>
    <Header title="Template React Frontend" logo={logo} styleSheet={{}} />
    <NavBar styleSheet={navBarStyles} />
    <div className={css(styles.content)}>{props.children}</div>
  </div>
);

Main.defaultProps = {
  children: null,
};

export default Main;
