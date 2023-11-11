import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppButton from '../components/AppButton';

export default function ContactScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {hideMenu && <AppText style={styles.text}>Contact Form</AppText>}
      <AppTextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
      />
      <AppTextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.input}
      />
      <View style={styles.messageInputContainer}>
        <AppTextInput
          multiline
          numberOfLines={4}
          placeholder="Your Message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
        />
      </View>
      <AppButton title="Submit" style={styles.button} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
		paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentContainer: {
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 24,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  messageInputContainer: {
		width: "100%",
    maxHeight: 200,
  },
});
