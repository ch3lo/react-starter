import React from 'react'
import { Router, Route } from 'react-router'
import AppRoot from './components/layout/app-root'
import Register from './components/vendors/register'
import List from './components/vendors/list'
require('../stylesheet/style')

React.render((
  <Router>
    <Route path="/" component={AppRoot}>
      <Route path="register" component={Register} />
      <Route path="list" component={List} />
    </Route>
  </Router>
), document.getElementById('app'))
