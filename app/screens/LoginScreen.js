import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<AppText style={styles.heading}>Welcome to Little Lemon</AppText>
			<View style={styles.inputContainer}>
				<AppText>Login to continue</AppText>
				<AppTextInput
					placeholder="email"
					keyboardType="email-address"
					autoCapitalize="none"
					clearButtonMode="always"
				/>
				<AppTextInput
					placeholder="password"
					autoCapitalize="none"
					clearButtonMode="always"
					secureTextEntry={true}
				/>
				<AppButton title="Submit" onPress={() => console.log("Logged In!")} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingVertical: 30,
		paddingHorizontal: 20,
		gap: 50,
	},
	heading: {
		fontSize: 25,
	},
	inputContainer: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		gap: 10,
	}
});
