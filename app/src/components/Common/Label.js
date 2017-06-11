// @flow
import React from 'react';
import { getStyle, StyleSheet, css } from '../../utils/aphrodite';

type Props = {
  label: string,
  styleSheet?: {
    label?: {},
  },
};

const styles = StyleSheet.create({
  label: {
    background: 'white',
    padding: 20,
  },
});

const Label = ({ label, styleSheet }: Props) => {
  const labelStyle = getStyle('label', styles, styleSheet);
  return <span className={css(labelStyle)}>{label}</span>;
};

Label.defaultProps = {
  styleSheet: {
    label: null,
  },
};

export default Label;
