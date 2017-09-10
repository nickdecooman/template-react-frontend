// @flow

import React from 'react';
import ContentBlock from '../components/ContentBlock';
import { Button } from '../components/Common';
import { StyleSheet } from '../utils/aphrodite';
import { AMBER_500, TEAL_700, WHITE } from '../styles/colors';

const contentBlockStyles = StyleSheet.create({
  title: {
    color: TEAL_700,
  },
  button: {
    marginTop: '1em',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: '2em',
    background: AMBER_500,
    height: '4em',
    color: WHITE,
  },
});

const onButtonClick = () => console.log('Hello World');

const About = () => (
  <div>
    <ContentBlock
      title="About"
      body="This page contains info about me"
      styleSheet={contentBlockStyles}
    />
    <Button
      label="Contact me"
      onClick={onButtonClick}
      styleSheet={buttonStyles}
    />
  </div>
);

export default About;
