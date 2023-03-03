import {
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
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
            source={require("../assets/image.png")}
            style={styles.image}
          />
          <Text style={styles.textHeader}>More than just a game</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Username</Text>
          <TextInput
           placeholderTextColor="#C0C0C0"
            placeholder="Username"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            value={username}
            onChangeText={(username) => onChangeUsername(username)}
            style={styles.textInput}
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#C0C0C0"
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            value={email}
            onChangeText={(email) => onChangeEmail(email)}
            style={styles.textInput}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            placeholder="Min. 5 characters"
            placeholderTextColor="#C0C0C0"
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
          <Text style={{ color: "#D8EBEB", textAlign: "center", fontWeight:'bold', fontSize:18 }}>CREATE ACCOUNT</Text>
        </Pressable>
      
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    marginBottom: 30,
    marginTop:20
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#D8EBEB",
  },
  textContainer: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
    color:'white',
    // fontFamily: 'Poppins'
  },
  text:{
    marginTop:20,
    color:'white',
    fontWeight:'bold'
  },
  textInputContainer: {
    flex: 1,
    marginTop: 10,
    width: "90%",
    marginBottom: 20,
  },
  textInput: {
    textAlignVertical: "center",
    flexDirection: "row",
    padding: 10,
    paddingLeft:15,
    fontSize: 15,
    flex: 2,
    marginTop: 10,
    borderRadius: 30,
    paddingTop: 10,
    height: 50,
    backgroundColor: "white",
  },
  button: {

    marginTop: 80,
    width: "90%",
    height: "5%",
    marginBottom: 200,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
