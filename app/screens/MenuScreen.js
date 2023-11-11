import { StyleSheet, Text, View, SectionList, Pressable } from 'react-native'
import React from 'react'

import MenuCard from '../components/MenuCard'
import AppText from '../components/AppText';

const menu = [
  {
    title: "Appetizers",
    data: [
      "Bruschetta",
      "Mozzarella Sticks",
      "Chicken Wings",
      "Spinach and Artichoke Dip",
      "Stuffed Mushrooms"
    ]
  },
  {
    title: "Main Dishes",
    data: [
      "Spaghetti Carbonara",
      "Grilled Salmon",
      "Chicken Parmesan",
      "Beef Stir-Fry",
      "Vegetable Lasagna"
    ]
  },
  {
    title: "Side Dishes",
    data: [
      "Garlic Mashed Potatoes",
      "Steamed Broccoli",
      "Coleslaw",
      "Onion Rings",
      "Corn on the Cob"
    ]
  },
  {
    title: "Desserts",
    data: [
      "Chocolate Cake",
      "Cheesecake",
      "Tiramisu",
      "Apple Pie",
      "Ice Cream Sundae"
    ]
  }
]
export default function MenuScreen({navigation}) {
  const renderItem = ({item}) => <MenuCard name={item} />
  const renderSectionHeader = ({section: {title}}) => (
    <Text style={styles.text}>{title}</Text>
  )
  return (
    <View style={styles.container}>
      <SectionList 
        sections={menu}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        style={styles.sectionWrap}
      />
      <Pressable onPress={()=> navigation.goBack()} style={styles.button}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#495E57',
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    backgroundColor: "#F4CE14",
    textAlign: "center",
  },
  // sectionWrap: {
  //   // backgroundColor: "red",
  //   marginBottom: 20,
  //   gap: 10
  // },
  button: {
    marginTop: 'auto',
    paddingVertical: 10,
    borderRadius: 6,
    width: "30%",
    backgroundColor: "#F4CE14",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})