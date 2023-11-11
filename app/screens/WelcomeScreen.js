import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable, Image } from "react-native";
import ItemCard from "../components/ItemCard";
import AppText from "../components/AppText"
import AppButton from '../components/AppButton';

const menuItemsToDisplay = [
	{ name: "Hummus", price: "$5.00", id: "1A" },
	{ name: "Moutabal", price: "$5.00", id: "2B" },
	{ name: "Falafel", price: "$7.50", id: "3C" },
	{ name: "Marinated Olives", price: "$5.00", id: "4D" },
	{ name: "Kofta", price: "$5.00", id: "5E" },
	{ name: "Eggplant Salad", price: "$8.50", id: "6F" },
	{ name: "Lentil Burger", price: "$10.00", id: "7G" },
	{ name: "Smoked Salmon", price: "$14.00", id: "8H" },
	{ name: "Kofta Burger", price: "$11.00", id: "9I" },
	{ name: "Turkish Kebab", price: "$15.50", id: "10J" },
	{ name: "Fries", price: "$3.00", id: "11K" },
	{ name: "Buttered Rice", price: "$3.00", id: "12L" },
	{ name: "Bread Sticks", price: "$3.00", id: "13M" },
	{ name: "Pita Pocket", price: "$3.00", id: "14N" },
	{ name: "Lentil Soup", price: "$3.75", id: "15O" },
	{ name: "Greek Salad", price: "$6.00", id: "16Q" },
	{ name: "Rice Pilaf", price: "$4.00", id: "17R" },
	{ name: "Baklava", price: "$3.00", id: "18S" },
	{ name: "Tartufo", price: "$3.00", id: "19T" },
	{ name: "Tiramisu", price: "$5.00", id: "20U" },
	{ name: "Panna Cotta", price: "$5.00", id: "21U" },
];
export default function WelcomeScreen({ navigation }) {
	const renderItem = ({ item }) => (
		<ItemCard name={item.name} price={item.price} />
	);
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				source={require("../assets/little-lemon-logo-text.png")}
				style={styles.image}
        accessible
        accessibilityLabel="Little Lemon Logo"
			/>
			<AppText style={styles.subHeading}>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear more about your experience with us!
			</AppText>
			<AppButton title="Subscribe" onPress={() => navigation.navigate("Subscribe")} />
			{/* <View>
				<FlatList
					data={menuItemsToDisplay}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
					contentContainerStyle={styles.flatListContainer}
				/>
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		alignItems: "center",
		gap: 20
	},
	image: {
		height: 180,
		width: 180,
	},
	subHeading: {
		fontSize: 20,
		flexDirection: "row",
		justifyContent: "center",
		textAlign: "center",
		color: "#000",
		paddingTop: 10,
	},
	flatListContainer: {
		flexGrow: 1,
	},
	button: {
		paddingVertical: 10,
		marginVertical: 20,
		borderRadius: 5,
		backgroundColor: "#F4CE14",
		alignItems: "center",
	},
	buttonText: { fontSize: 20 }
});
