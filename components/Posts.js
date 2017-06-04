import React, { Component } from "react";
import { Text, View, ListView } from "react-native";
import { connect } from "react-redux";
import { loadPosts, checkCanLoadMore } from "../reducers/PostsReducer";
import { Spinner } from "./common/Spinner";
import PostListItem from "./PostListItem";


class Posts extends Component {
  state = { currentPage: 0 };
  componentWillMount() {
    this.props.loadPosts(this.state.currentPage);
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

  loadAdditionalPosts() {
    let current = this.state.currentPage;
    let newPageNum = current + 1;
    this.setState({ currentPage: newPageNum });
    this.props.loadPosts(this.state.currentPage);
  }

  render() {
    return (
      <View style={styles.containerStyles}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          onEndReached={this.loadAdditionalPosts.bind(this)}
        />
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
  const { posts } = postsRequest;
  return { posts };
};

const mapDispatchToProps = {
  loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
