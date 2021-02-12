import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as Linking from 'expo-linking';
import Colors from "../constants/Colors";

/*
 *
 * Function Component Definiton: Settings Screen
 *
 */
const SettingsScreen = () => {
    return (
        <View style={styles.button}>
            <Button
                color={Colors.darkGray}
                title={"Terms and Conditions"}
                onPress={() => Linking.openURL("https://google.com")}>
            </Button>
        </View>
    );
};

/*
 *
 * Set up the layout of the navigation header. Provides the header title.
 *
 */
SettingsScreen.navigationOptions = {
    headerTitle: "Settings",
};


const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10, 
    borderColor: Colors.gray,
    backgroundColor: 'white'
  },
});

export default SettingsScreen;