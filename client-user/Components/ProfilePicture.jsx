import { StyleSheet, View, Text, Image } from "react-native";

export default function ProfilePicture(){
    return(
        <View
        style={{
          width: "25%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: 100,
          alignItems:'center',
          justifyContent:'center',
          marginRight:40,
          marginLeft:40,
          marginTop:3
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
          }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: "90%",
      height: "90%",
      borderRadius: 100,
    },
  });