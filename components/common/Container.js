import React from "react";
import { View } from "react-native";

const Container = props => {
  const { containerOuter, containerInner } = styles;
  return (
    <View style={containerOuter}>
      <View style={containerInner}>
        {props.children}
      </View>
    </View>
  );
};

const styles = {
  containerOuter: {
    borderColor: "#ddd",
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  containerInner: {
    margin: 5
  }
};

export { Container };
