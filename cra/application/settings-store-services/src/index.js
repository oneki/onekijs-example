import { App, createReduxStore, latest, useGlobalService, useReduxSelector, useGlobalProp } from "onekijs";
import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { call, delay as sagaDelay } from "redux-saga/effects";
import settings from "./settings";

// Example of a Redux store created manually
// The store must be created via createReduxStore from Oneki.js
const initialState = {};
const store = createReduxStore(initialState, [createSagaMiddleware()]);

// Example of a very simple service that can set a loading state
// This service is a global service, it means that it's instantied only once
// for the whole application
const loadingService = {
  name: "loading",
  reducers: {
    setLoading: (state, loading) => {
      state.loading = loading;
    }
  },
  sagas: {
    load: latest(function*(delay) {
      yield call(this.setLoading, true);
      yield sagaDelay(2000);
      yield call(this.setLoading, false);
    })
  }
};

// The <Main /> component can call the global service
// defined above
const Main = () => {
  const service = useGlobalService(loadingService);
  const [loading] = useGlobalProp("loading");
  return (
    <button onClick={() => service.load(2000)}>
      {loading ? "Loading ..." : "Click me"}
    </button>
  );
};

ReactDOM.render(
  <App
    settings={settings}
    store={store}
    services={[loadingService]}
    fallback={<div>Loading ...</div>}
  >
    <div
      style={{ backgroundColor: "#EEE", padding: "10px", marginBottom: "10px" }}
    >
      <Link to="/">Home</Link> | <Link to="/users">Users</Link>
    </div>
    <Switch>
      <Route path="/users">
        <div>This is the user page</div>
      </Route>
      <Route>
        <Main />
      </Route>
    </Switch>
  </App>,
  document.getElementById("root")
);
