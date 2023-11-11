import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function AppTextInput({ style, ...otherProps }) {
	return (
		<View style={[styles.container, style]}>
			<TextInput style={styles.input} {...otherProps} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    padding: 5,
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5
	},
});
