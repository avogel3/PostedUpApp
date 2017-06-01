import React from "react";
import { ActivityIndicator, View } from "react-native";

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || "small"} style={{ height: 44 }} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Spinner;
