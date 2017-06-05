// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/Main';
import Index from './pages/Index';
import OtherPage from './pages/OtherPage';

const Router = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/other" component={OtherPage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Router;
