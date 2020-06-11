import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './pages/App';

const Router = () => {
  <BrowserRouter>
    <Switch>
      <Route
        path='/to-do-list'
        exact
        component={App}
      />
    </Switch>
  </BrowserRouter>
};

export default Router;