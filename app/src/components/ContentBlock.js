// @flow

import React from 'react';
import { Title, Text } from './Common';
import { getStyleSheet } from 'aphrodite-helpers';
import { type SheetDefinition } from 'aphrodite/no-important';

type Props = {
  title: string,
  body: string,
  styleSheet?: {
    title?: SheetDefinition,
    body?: SheetDefinition,
  },
};

const ContentBlock = ({ title, body, styleSheet }: Props) => {
  const titleStyleSheet = getStyleSheet('title', styleSheet);
  const bodyStyleSheet = getStyleSheet('body', styleSheet);
  return (
    <div>
      <Title styleSheet={titleStyleSheet}>{title}</Title>
      <hr />
      <Text styleSheet={bodyStyleSheet}>{body}</Text>
    </div>
  );
};

ContentBlock.defaultProps = {
  styleSheet: {
    title: null,
    body: null,
  },
};

export default ContentBlock;
