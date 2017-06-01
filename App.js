import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";
import { composeWithDevTools } from "redux-devtools-extension";

export default class App extends Component {
  render() {
    const store = createStore(
      reducers,
      {},
      composeWithDevTools(applyMiddleware(ReduxThunk))
    );

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
