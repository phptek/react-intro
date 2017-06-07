import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'styles';
import Homepage from 'components/homepage/homepage';
import About from 'components/about/about';

ReactDOM.render(
  <Router>
    <div className="wrapper">
      <Route path="/" component={Homepage} exact />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('app')
);
