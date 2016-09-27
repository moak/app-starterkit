import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Hi from './components/Hi';
import SignupPage from './components/SignupPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Hi} />
    <Route path="signup" component={SignupPage} />
  </Route>
)
