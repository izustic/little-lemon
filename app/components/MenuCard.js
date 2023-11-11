import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MenuCard({name}) {
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#000",
    padding: 5
  }
})