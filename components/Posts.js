import React, { Component } from "react";
import { Text, View, ListView } from "react-native";
import { connect } from "react-redux";
import { loadPosts } from "../reducers/PostsReducer";
import { Spinner } from "./common/Spinner";
import PostListItem from "./PostListItem";

class Posts extends Component {
  componentWillMount() {
    this.props.loadPosts();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ posts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(posts);
  }

  renderRow(post) {
    return <PostListItem post={post} />;
  }

  render() {
    console.log(this.props);
    const isLoadingPosts = loading => {
      if (loading) {
        return <Spinner />;
      } else {
        return (
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        );
      }
    };

    const { loading } = this.props;

    return (
      <View style={styles.containerStyles}>
        {isLoadingPosts(loading)}
      </View>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    flexDirection: "column",
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
