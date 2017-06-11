// @flow

import React from 'react';
import { getStyle, StyleSheet, css } from '../../utils/aphrodite';

type Props = {
  children: string,
  styleSheet?: {
    title?: {},
  },
};

const styles = StyleSheet.create({
  title: {
    fontSize: '24pt',
  },
});

const Title = ({ children, styleSheet }: Props) => {
  const textStyle = getStyle('title', styles, styleSheet);
  return (
    <span className={css(textStyle)}>
      {children}
    </span>
  );
};

Title.defaultProps = {
  styleSheet: {
    title: null,
  },
};

export default Title;
