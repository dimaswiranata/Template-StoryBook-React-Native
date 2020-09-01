import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const index = () => {
  return (
    <ScrollView horizontal style={styles.scroll}>
      <Text>Isi Component</Text>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  scroll: {
    height: 300,
  },
  card: {
    height: "100%",
    width: 200,
  },
})