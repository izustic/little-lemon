import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
	return (
		<View style={styles.footerContainer}>
			<Text style={styles.footerText}>
				All rights reserved by Little Lemon, 2022{' '}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	footerContainer: {
		justifyContent: "center",
		backgroundColor: "#F4CE14",
	},
	footerText: {
		padding: 20,
		fontSize: 15,
		color: "black",
    textAlign: "center"
	},
});
