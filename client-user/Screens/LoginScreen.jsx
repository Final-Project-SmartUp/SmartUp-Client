import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Pressable, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../stores/actions/actionCreator';

const LoginPage = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  function getEmailDataValue(e){
      setEmail(e)
  }
  function getPasswordDataValue(e){
    setPassword(e)
  }
 
  const handleLogin = (e) => {
      dispatch(login({
        email:email,
        password:password
      }))
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={require("../assets/image.png")} style={styles.image} />
          <Text style={styles.textHeader}>More than just a game</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            placeholderTextColor="#C0C0C0"
            placeholder="Email"
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
          <Text style={styles.textButton}>LOGIN</Text>
        </Pressable>
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    marginBottom: 30,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC3BD",
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
    color: "white",
    fontWeight: "bold",
    // fontFamily: 'Poppins'
  },
  text: {
    marginTop: 23,
    color: "white",
    fontWeight: "bold",
    fontSize:18
  },
  textInputContainer: {
    flex: 1,
    marginTop: 70,
    width: "90%",
    marginBottom: 20,
  },
  textInput: {
    textAlignVertical: "center",
    flexDirection: "row",
    padding: 10,
    paddingLeft: 15,
    fontSize: 15,
    flex: 2,
    marginTop: 10,
    borderRadius: 30,
    paddingTop: 10,
    height: 50,
    backgroundColor: "white",
  },
  button: {
    marginTop: 110,
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
  textButton: {
    color: "#FFC3BD",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LoginPage;
