import React from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import Posts from "./components/Posts";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="posts" component={Posts} initial title="Posts" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
