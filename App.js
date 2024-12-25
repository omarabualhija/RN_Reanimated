import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Animated, { useSharedValue } from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);

const App = () => {
  /// useSharedValue

  const width = useSharedValue(100);

  const onPress = () => {
    // setWidth((prev) => prev + 10);
    width.value = width.value + 10;
  };

  console.log(`width ${width.value}`);

  return (
    <SafeAreaView style={styles.container}>
      <AnimatedText>{`width:${width.value}`}</AnimatedText>
      <Animated.View style={{ width, height: 100, backgroundColor: "red" }} />
      <Button title="Press me !" onPress={onPress} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
