// @flow
/* eslint react/no-unused-prop-types: 0 */

import React from 'react';
import { Title } from './Common';
import { TEAL_700, WHITE } from '../styles/colors';
import { StyleSheet, css } from 'aphrodite/no-important';
import { getStyle, getStyleSheet } from 'aphrodite-helpers';

type Props = {
  title: string,
  logo: string,
  styleSheet?: {
    header?: {},
    logo?: {},
    title: {},
  },
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: TEAL_700,
    height: '150px',
    padding: '20px',
    color: WHITE,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    animationName: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    height: '60px',
  },
  title: {
    marginTop: '0.5em',
  },
});

const Header = ({ title, logo, styleSheet }: Props) => {
  const headerStyle = getStyle('header', styles, styleSheet);
  const logoStyle = getStyle('logo', styles, styleSheet);
  const titleStyleSheet = getStyleSheet('title', styles, styleSheet);
  return (
    <div className={css(headerStyle)}>
      <img src={logo} className={css(logoStyle)} alt="logo" />
      <Title styleSheet={titleStyleSheet}>{title}</Title>
    </div>
  );
};

Header.defaultProps = {
  styleSheet: {
    header: null,
    logo: null,
    title: null,
  },
};

export default Header;
