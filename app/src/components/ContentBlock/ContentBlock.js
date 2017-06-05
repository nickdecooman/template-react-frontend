// @flow

import React from 'react';
import { Title, Text } from '../Text';

type Props = {
  title: string,
  body: string,
};

const ContentBlock = ({ title, body }: Props) => (
  <div>
    <Title>{title}</Title>
    <hr />
    <Text>{body}</Text>
  </div>
);

export default ContentBlock;
