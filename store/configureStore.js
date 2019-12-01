import { applyMiddleware, compose, createStore } from "redux";
import { fromJS } from "immutable";
import devTools from "remote-redux-devtools";
import createReducer from "@reducers";

import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState = fromJS({})) {
  const middlewares = [loggerMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  if (__DEV__) {
    enhancers.push(devTools());
  }

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers)
  );

  return store;
}

module.exports = configureStore;
