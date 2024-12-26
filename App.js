import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const App = () => {
  const onLayout = (e) => {
    console.log(e.nativeEvent);
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "yellow" }}>
        <View
          onLayout={onLayout}
          style={{
            width: 200,
            height: 150,
            backgroundColor: "red",
            start: 120,
            top: 403,
            // transform: [{ translateX: 120 }, { translateY: 403 }],
          }}
        />
      </View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "black" }}
      ></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //justifyContent: "center",
    //alignItems: "center",
  },
});
