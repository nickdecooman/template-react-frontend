// @flow

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { type SheetDefinition, getStyle } from '../../utils/aphrodite';

type Props = {
  children: string,
  styleSheet?: {
    text?: SheetDefinition,
  },
};

const styles = StyleSheet.create({
  text: {
    fontSize: '12pt',
  },
});

const Text = ({ children, styleSheet }: Props) => {
  const textStyle = getStyle('text', styles, styleSheet);
  return <span className={css(textStyle)}>{children}</span>;
};

Text.defaultProps = {
  styleSheet: {
    text: null,
  },
};

export default Text;
