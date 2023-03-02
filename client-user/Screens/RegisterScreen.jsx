import {
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
// konflick?
export default function Register() {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image
            source={require("../assets/gajah_kocak-removebg.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Register</Text>
          <Text>Please create your account before play our fun game!</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Username"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            value={username}
            onChangeText={(username) => onChangeUsername(username)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            value={email}
            onChangeText={(email) => onChangeEmail(email)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            value={password}
            onChangeText={(password) => onChangePassword(password)}
            style={styles.textInput}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={{ color: "white", textAlign: "center" }}>SIGN UP</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 30,
  },
  textInputContainer: {
    flex: 1,
    marginTop: 50,
    width: "90%",
    marginBottom: 20,
  },
  textInput: {
    textAlignVertical: "center",
    flexDirection: "row",
    padding: 10,
    fontSize: 20,
    flex: 2,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingTop: 10,
    height: 50,
    backgroundColor: "#EEEEEE",
  },
  button: {
    flex: 1,
    marginTop: 50,
    width: "50%",
    height: "40%",
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: "#A9D5E2",
    borderColor: "#A9D5E2",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
