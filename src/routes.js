import React from "react";
import App from "./App";
import AppNoHooks from "./AppNoHooks";
import BigClass from "./ClassComponent";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";

const Post = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Post {match.params.id}</h2>
    </div>
  );
};

const Root = () => (
  <Router>
    <div>
      <p>
        <Link to={`/`}>No Hook</Link>
      </p>
      <p>
        <Link to={`/hook`}>Hook</Link>
      </p>
      <p>
        <Link to={`/class`}>Class</Link>
      </p>
      <p>
        <Link to={`/post/2/3`}>Post Single</Link>
      </p>
      <p>
        <Link to={`/render`}>Renderd Route</Link>
      </p>
    </div>
    <Switch>
      <Route path="/" exact>
        <AppNoHooks />
      </Route>
      <Route path="/hook">
        <App />
      </Route>
      <Route path="/class">
        <BigClass />
      </Route>
      <Route
        path="/render"
        component={() => (
          <div>
            <h1>Rendered Route</h1>
          </div>
        )}
      />
      <Route path="/post/:id/:slug" component={Post} />
      <Redirect to="/somewhere" />
    </Switch>
  </Router>
);


export default Root
