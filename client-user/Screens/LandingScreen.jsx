import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable  } from 'react-native';

const LandingPage = () => {
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

      <Pressable style={styles.button1}>
        <Text style={{ color: "#C8ECA4", textAlign: "center", fontWeight:'bold', fontSize:18 }}>CREATE ACCOUNT</Text>
      </Pressable>
      <Pressable style={styles.button2}>
        <Text style={{ color: "#C8ECA4", textAlign: "center", fontWeight:'bold', fontSize:18 }}>SIGN IN</Text>
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
    marginTop:100
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#C8ECA4",
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
    fontWeight:'bold'
    // fontFamily: 'Poppins'
  },
  button1: {
    marginTop: 240,
    width: "90%",
    height: "5%",
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  button2:{
    marginTop: 20,
    width: "90%",
    height: "5%",
    marginBottom: 200,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LandingPage;