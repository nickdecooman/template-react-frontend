// @flow

import React from 'react';
import { css } from 'aphrodite/no-important';
import { type SheetDefinition, getStyle } from '../../utils/aphrodite';

type Props = {
  label: string,
  onClick: () => void,
  styleSheet?: {
    button?: SheetDefinition,
  },
};

const Button = ({ label, onClick, styleSheet }: Props) => {
  const buttonStyle = getStyle('button', styleSheet);
  return (
    <button
      className={`mdc-button mdc-button--raised mdc-button--accent ${css(
        buttonStyle
      )}`}
      onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  styleSheet: {
    button: null,
  },
};

export default Button;
