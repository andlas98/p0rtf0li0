import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import portrait from './andrewPortrait.jpg';

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
    <img className="homePagePortrait" src={portrait}alt="andrewPortrait"></img>
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
    <h2 className="heading">Portfolio</h2>
    <p><b>Note:</b> </p>
    <div className="project-div">
      <h3 className="project-heading">Gaming News Aggregator</h3>
      <p className="description">
        This webpage displays the RSS feeds of gaming websites I frequent. This prevents me from having to access every single site to stay updated on gaming news.
      </p>
      <a href="https://github.com/andlas98/GNA_Redux" target="_blank">Source Code (Github)</a>
    </div>
    <div className="project-div">
      <h3 className="project-heading">My Portfolio Site</h3>
      <p className="description">
        The website you're looking at right now! This was actually the result of one the final projects I had to do for my undergrad.
      </p>
      <a href="https://github.com/andlas98/final-project" target="_blank">Source Code (Github)</a>
    </div>
    <div className="project-div">
      <h3 className="project-heading">African Students Association Website</h3>
      <p className="description">
        In my first college (Rensselaer Polytechnic Institute), I was once webmaster for the African Students Association. The rest of the executive board tasked me to create an official site representing the club. The result was the first full website I ever created (that's also still available on the Internet!).
      </p>
      <a href="https://github.com/andlas98/Portfolio/tree/master/ASAWebsite2.0" target="_blank">Source Code (Github)</a>
      <p></p>
      <a href="http://asa.union.rpi.edu/" target="_blank">Website</a>
    </div>
    
  </div>
  ); 
}
