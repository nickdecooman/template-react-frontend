// @flow

import React from 'react';

const defaultStyle = {
  fontSize: 40,
};

const Text = (props: { children: string, style: any }) => (
  <span style={Object.assign({}, defaultStyle, props.style)}>
    {props.children}
  </span>
);

export default Text;
