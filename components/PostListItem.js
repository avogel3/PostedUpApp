import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import _ from "lodash";
import { Actions } from "react-native-router-flux";
import { Container } from "./common";

class PostListItem extends Component {
  onRowPress() {
    const { id } = this.props.post;
    Actions.post({ post_id: id });
  }

  render() {
    const { title, author, posted_date } = this.props.post;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.postContainer}>
          <View style={styles.postContainerInner}>
            <Text>{_.truncate(title, { length: 50 })}</Text>
            <View>
              <Text style={styles.authorText}>By {author}</Text>
              <Text style={styles.authorText}>{posted_date}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  postContainer: {
    flex: 1,
    borderColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  postContainerInner: {
    margin: 5
  },
  authorText: {
    color: "#a9a9a9"
  }
};

export default PostListItem;
