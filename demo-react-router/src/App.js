import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./pages/About";
import Compteurs from "./pages/compteurs"
import Home from "./pages/Home";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="links" to="/">Home</Link>
            </li>
            <li>
              <Link className="links" to="/about">About</Link>
            </li>
            <li>
              <Link className="links" to="/users">Users</Link>
            </li>
            <li>
              <Link className="links" to="/compteurs">Compteurs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/compteurs">
            <Compteurs/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}







