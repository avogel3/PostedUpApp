import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

class PostListItem extends Component {
  onRowPress() {
    //console.log("Row Press!");
  }

  render() {
    const { title, content } = this.props.post;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback>
        <View style={styles.postContainer}>
          <View style={styles.postContainerInner}><Text>{title}</Text></View>
          <View style={styles.postContainerInner}>
            <Text>{content}</Text>
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
    marginBottom: 10,
    marginTop: 10
  },
  postContainerInner: {
    margin: 5
  }
};

export default PostListItem;
