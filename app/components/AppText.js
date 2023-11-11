import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppText({children, style, ...otherProps}) {
  return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 24,
    color: "#000"
  }
})