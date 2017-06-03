// @flow

import React from 'react';
import logo from './logo.svg';
// import './App.css';

type Props = {
  name: string,
};

const Header = ({ name }: Props) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome {name}!</h2>
  </div>
);

export default Header;
