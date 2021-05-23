import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="bodyDiv">
        <nav>
          <ul className="navBar">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
  <div>
    <h2 className="heading andrew">Andrew Ohakam</h2>
    <div>
      Andrew Ohakam is a frontend web developer who strives to become a full-stack developer.
    </div>
    
  </div>);
}

function About() {
  return (
    <div>
      <h2 className="heading">About</h2>
      <div className="about-paragraph">
        My name is Andrew Ohakam. I was born and raised in the Bronx, New York.
      </div>
    </div>
  );
}

function Portfolio() {
  return (
  <div>
    <h2>Portfolio</h2>
  </div>
  ); 
}
