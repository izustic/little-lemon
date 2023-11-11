import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ItemCard({name, price}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "#F4CE14"
  }
})