import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlanCard } from "./src/Components";

export default function App() {
  return (
    <View style={styles.root}>
      <PlanCard />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
});
