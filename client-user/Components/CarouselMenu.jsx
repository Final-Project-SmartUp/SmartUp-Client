import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from "react-native";

export default function CardCategories() {
  return (
    <View
      style={styles.cardContainer}
    >
      <View
        style={styles.card}
      >
        <Text>Hello</Text>
      </View>
      <View
        style={styles.card}
      >
        <Text>Hello</Text>
      </View>
      <View
        style={styles.card}
      >
        <Text>Hello</Text>
      </View>
      <View
        style={styles.card}
      >
        <Text>Hello</Text>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer:{
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    height: "70%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  card:{
    backgroundColor: "white",
    width: "30%",
    height: "70%",
    marginRight: 10,
    borderRadius:5
  }
});
