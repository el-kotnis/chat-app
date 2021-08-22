import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Header/>
          </Route>
        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
