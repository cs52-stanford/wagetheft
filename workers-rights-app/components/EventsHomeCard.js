import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const EventsHomeCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.eventName}>{props.title}</Text>
          <Text>{props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    marginRight: 325,
    borderRadius: 2,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },

  imageContainer: {
    width: "100%",
    height: 70,
    marginBottom: 16,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    shadowRadius: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    marginLeft: 38,
  },

  eventName: {
    marginBottom: 5,
  },
});

export default EventsHomeCard;
