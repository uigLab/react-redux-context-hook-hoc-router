import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import counter from "../reducers/counter";
import auth from "../reducers/auth";
import posts from "../reducers/posts";
import {
  forbiddenNumberMiddleware,
  forbiddenNumberMiddleware2
} from "../middleware";

const rootReducer = combineReducers({
  counter,
  auth,
  posts
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(forbiddenNumberMiddleware, forbiddenNumberMiddleware2, thunk)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
