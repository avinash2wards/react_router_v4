import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./home.jsx";
import About from "./about.jsx";
import Topics from "./topics.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h3>React Router 4.3.x demo</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}

export { App };
