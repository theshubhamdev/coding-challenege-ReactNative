import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/Colors";
import { BaseChip } from ".";

const PlanCard = () => {
  return (
    <View style={[styles.card, styles.shadow]}>
      <View style={[styles.tag]}>
        <Text style={[styles.tagText]}>Beginner</Text>
      </View>
      <View style={[styles.row]}>
        <Image
          source={{ uri: "https://picsum.photos/200/400" }}
          style={styles.image}
        />
        <View style={[styles.descriptionContainer]}>
          <Text style={[styles.heading]}>Holistic Journey Program</Text>
          <Text style={[styles.description]}>
            Lorem Ipsum dolert, Lorem Ipsum dolert, Lorem Ipsum dolert
          </Text>
          <BaseChip text="Zumba" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  image: {
    width: "30%",
    aspectRatio: 5 / 7,
    marginRight: 20,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    width: "100%",
  },
  shadow: {
    shadowOffset: {
      width: -2,
      height: 1,
    },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  heading: {
    fontSize: 16,
    color: colors.black,
  },
  description: {
    color: "grey",
  },
  descriptionContainer: {
    paddingVertical: 20,
    flexWrap: "wrap",
  },
  tag: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    paddingVertical: 5,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 30,
  },
  tagText: {
    color: colors.white,
  },
});
export default PlanCard;
