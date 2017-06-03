// @flow

import React from 'react';
import Header from '../../components/Header';
import './App.css';

const Main = (props: { children: any }) => (
  <div className="App">
    <Header name="World" />
    {props.children}
  </div>
);

export default Main;
