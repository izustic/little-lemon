import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function SubscribeScreen() {
  return (
    <View style={styles.container}>
      	<Image
				resizeMode="contain"
				source={require("../assets/little-lemon-logo-text.png")}
				style={styles.image}
        accessible
        accessibilityLabel="Little Lemon Logo"
			/>
      <AppText style={styles.heading}>Subscribe to our newsletter for our latest delicious recipe!</AppText>
      <AppTextInput placeholder="Type your email" style={styles.input}/>
      <AppButton style={styles.button} textColor="#fff" title="Subscribe" onPress={() => navigation.navigate("Subscribe")} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#333",
    color: "#fff"
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 20,
    alignItems: "center"
  },
  heading: {
    textAlign: "center"
  },
  image: {
		height: 180,
		width: 180,
  },
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },

})