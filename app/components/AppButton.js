import React from "react";
import { Pressable, StyleSheet } from "react-native";

import AppText from "./AppText";

export default function AppButton({ style, title, onPress, textColor = "#000", ...otherProps }) {
	return (
		<Pressable style={[styles.button, style]} onPress={onPress} {...otherProps}>
			<AppText
				style={{
					fontSize: 15,
					color: textColor,
          textAlign: "center"
				}}
			>
				{title}
			</AppText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		marginHorizontal: 20,
		marginVertical: 10,
		backgroundColor: "#F4CE14",
		borderRadius: 20,
		paddingHorizontal: 50,
	},
});
