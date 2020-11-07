import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

/*
 * Functional Component Defintion: ModalCloseButton
 *
 * This component outlines a basic "x" button to be used
 * to dismiss modals.
 *
 */

const ModalCloseButton = (props) => {
	return (
		<TouchableHighlight
			style={styles.modalCloseButton}
			underlayColor="transparent"
			u
			onPress={props.onCloseModal}
		>
			<Ionicons name="md-close" size={30} color={Colors.darkOrange} />
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	modalCloseButton: {
		position: "absolute",
		paddingTop: "4%",
		paddingRight: "3%",
		top: 0,
		right: 0,
	},
});

export default ModalCloseButton;
