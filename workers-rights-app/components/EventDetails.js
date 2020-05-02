import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const EventDetails = (props) => {
  const event = props.event;
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.headingImageContainer}>
        <Image source={{ uri: event.image }} style={styles.image} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoContainer}>
          <Text style={styles.lightText}>{event.date}</Text>
          <Text style={styles.titleText}>{event.title}</Text>
          <View style={styles.rowContainer}>
            <View style={styles.iconNtextContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.image}
                  source={require("../images/place.png")}
                />
              </View>
              <Text style={styles.lightText}>{event.location}</Text>
            </View>
            <View style={styles.iconNtextContainer}>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.image}
                  source={require("../images/clock.png")}
                />
              </View>
              <Text style={styles.lightText}>{event.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{ ...styles.lightText, marginBottom: 10 }}>
            Description:
          </Text>
          <Text style={styles.descriptionText}>{event.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingImageContainer: {
    height: "35%",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 6,
  },

  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 15,
  },

  lightText: {
    fontFamily: "nunito-light",
    fontSize: 14,
  },

  titleText: {
    fontSize: 20,
    fontFamily: "nunito-bold",
  },

  rowContainer: {
    flexDirection: "row",
    marginTop: 4,
  },

  iconContainer: {
    height: 14,
    width: 14,
    marginRight: 5,
  },

  iconNtextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },

  descriptionContainer: {
    paddingHorizontal: 15,
  },

  descriptionText: {
    fontFamily: "nunito-regular",
    fontSize: 15,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});

export default EventDetails;
