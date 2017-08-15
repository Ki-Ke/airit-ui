import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app';
import { Welcome } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Welcome} />
        <Route path='/about' component={Welcome} />
      </Route>
    </Router>
  );
};
