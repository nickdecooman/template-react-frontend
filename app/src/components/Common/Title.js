// @flow

import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { getStyle } from 'aphrodite-helpers';
import { type SheetDefinition } from 'aphrodite/no-important';

type Props = {
  children: string,
  styleSheet?: {
    title?: SheetDefinition,
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
