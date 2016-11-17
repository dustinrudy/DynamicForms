import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Styles 
import Styles from 'assets/styles/style.css'
import Normalize from 'assets/styles/normalize.css'

// Layouts
import App from 'layouts/app';

// UI
import Form from 'ui/home'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route component={Form} path="/"/>
    </Route>
  </Router>
), document.getElementById('app'));