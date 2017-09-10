// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';

const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Router;
