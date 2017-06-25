// @flow

import React from 'react';
import ContentBlock from '../components/ContentBlock';
import Button from '../components/Common/Button';
import { StyleSheet } from '../utils/aphrodite';

const contentBlockStyles = StyleSheet.create({
  title: {
    color: 'blue',
  },
  button: {
    marginTop: '1em',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: '1em',
    background: 'yellow',
    color: 'black',
  },
});

const About = () =>
  <div>
    <ContentBlock
      title="About"
      body="This page contains info about me"
      styleSheet={contentBlockStyles}
    />
    <Button
      label="Click here"
      onClick={() => console.log('Hello World')}
      styleSheet={buttonStyles}
    />
  </div>;

export default About;
