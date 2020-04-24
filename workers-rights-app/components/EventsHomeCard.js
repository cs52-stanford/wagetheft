import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const EventsHomeCard = (props) => {
  let TouchablePlatformSpecific =
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <TouchablePlatformSpecific
      onPress={() => {
        props.pressAction(props.id);
      }}
    >
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
          <View style={styles.dateContainer}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.image}
                source={require("../images/calendar.png")}
              />
            </View>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </View>
    </TouchablePlatformSpecific>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.866,
    height: 150,
    marginRight: 12,
    borderRadius: 7,
    backgroundColor: "#ffffff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },

  imageContainer: {
    width: "100%",
    height: 70,
    marginBottom: 16,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    marginLeft: 38,
  },

  eventName: {
    fontSize: 16,
    fontFamily: "nunito-semibold",
    marginBottom: 5,
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    fontSize: 16,
    fontFamily: "nunito-light",
  },

  iconContainer: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
});

export default EventsHomeCard;
