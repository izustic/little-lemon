import { Image, StyleSheet, Text, View, useColorScheme} from "react-native";
import  Constants from "expo-constants";

export default function LittleLemonHeader() {
  const colorScheme  =  useColorScheme()
	return (
		<View style={[styles.container, 
      colorScheme === 'light' ? { backgroundColor: "#fff" } : { backgroundColor: "#333" }
    ]}>
			<Image
				resizeMode="contain"
				source={require("../assets/little-lemon-logo.png")}
				style={styles.image}
        accessible
        accessibilityLabel="Little Lemon Logo"
			/>
			<Text style={[styles.text,
      colorScheme === 'light' ? { color: "#000" } : { backgroundColor: "#fff" }
      ]}>Little Lemon</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F4CE14",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
		gap: 10,
	},
	image: {
		height: 30,
		width: 30,
	},
	text: {
		padding: 0,
		fontSize: 30,
		color: "black",
		textAlign: "center",
	},
});
