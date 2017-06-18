// @flow

import React from 'react';
import ContentBlock from '../components/ContentBlock';
import { StyleSheet } from '../utils/aphrodite';

const contentBlockStyles = StyleSheet.create({
  title: {
    color: 'blue',
  },
});

const About = () =>
  <ContentBlock
    title="About"
    body="This page contains info about me"
    styleSheet={contentBlockStyles}
  />;

export default About;
