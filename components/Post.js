import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { loadSinglePost } from "../reducers/PostsReducer";
import { MarkdownView } from "react-native-markdown-view";
import { Container, Spinner } from "./common";

class Post extends Component {
  componentWillMount() {
    this.props.loadSinglePost(this.props.post_id);
  }

  render() {
    const { author, title, content, posted_date } = this.props.post;
    const { loading } = this.props;
    console.log(this.props);
    const isLoadingPost = loading => {
      if (loading) {
        return <Spinner />;
      } else {
        return (
          <Container>
            <Text>{title}</Text>
            <Text style={{ color: "#a9a9a9" }}>By {author}</Text>
            <Text style={{ color: "#a9a9a9" }}>{posted_date}</Text>
            <MarkdownView>
              {content}
            </MarkdownView>
          </Container>
        );
      }
    };
    return (
      <View style={{ flex: 1, marginTop: 75 }}>
        <ScrollView>
          {isLoadingPost(loading)}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ postsRequest }) => {
  const { loading, post } = postsRequest;
  return { loading, post };
};

const mapDispatchToProps = {
  loadSinglePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
