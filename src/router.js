import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';


export default function Index() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
