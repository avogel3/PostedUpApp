import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { loadPosts } from "../reducers/PostsReducer";
import Spinner from "./Spinner";

class Posts extends Component {
  componentWillMount() {
    this.props.loadPosts();
  }

  render() {
    console.log(this.props);
    const isLoadingPosts = loading => {
      if (loading) {
        return <Spinner />;
      }
    };

    const { loading, posts } = this.props;

    return (
      <View style={styles.containerStyles}>
        {isLoadingPosts(loading)}
      </View>
    );
  }
}

const styles = {
  bodyText: {
    justifyContent: "center"
  },
  containerStyles: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 25,
    marginRight: 25,
    marginTop: 75
  }
};

const mapStateToProps = ({ postsRequest }) => {
  const { loading, posts } = postsRequest;
  return { loading, posts };
};

const mapDispatchToProps = {
  loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
