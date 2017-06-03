// @flow

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';

const Router = () => (
  <BrowserRouter>
    <Route path="*" component={Index} />
  </BrowserRouter>
);

export default Router;
