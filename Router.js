import React from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import Posts from "./components/Posts";
import Post from "./components/Post";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="posts" component={Posts} initial title="PostedUp - Posts" />
        <Scene key="post" component={Post} title="PostedUp - Post Show" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
