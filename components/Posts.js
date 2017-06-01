import React, { Component } from "react";
import { Text, View } from "react-native";

class Posts extends Component {
  render() {
    return (
      <View style={styles.containerStyles}>
        <Text style={styles.bodyText}>This is the posts view.</Text>
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

export default Posts;
