import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Scroller } from "../../component";

const index = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0))

  const handleOpen = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const screenHeight = Dimensions.get("window").height;

  const backdrop = {
    transform: [
      {
          translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [screenHeight, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0.01, 0.5],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
  };

  const slideUp = {
    transform: [
      {
          translateY: animation.interpolate({
          inputRange: [0.01, 1],
          outputRange: [0, -1 * screenHeight],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpen}>
        <Text>Open</Text>
      </TouchableOpacity>

      <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
        <View style={[styles.sheet]}>
          <Animated.View style={[styles.popup, slideUp]}>
            <TouchableOpacity onPress={handleClose}>
              <Text>Close</Text>
            </TouchableOpacity>
            <Scroller />
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
})
