import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppNoHooks from "./AppNoHooks";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import BigClass from "./ClassComponent";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from "react-router-dom";

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
      <Route path="/class"><BigClass/></Route>
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

const Post = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>Post {match.params.id}</h2>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
