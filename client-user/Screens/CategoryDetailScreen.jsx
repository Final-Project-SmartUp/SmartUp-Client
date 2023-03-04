import { useEffect, useState } from "react";
import { TextInput, View, Button, Text, ScrollView, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import db from "../config/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { onSnapshot } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export default function CategoryDetail({ navigation }) {
    const [currentUser, setCurrentUser] = useState({
        userId: "",
        username: "",
        isFindMatch: "",
        isPlaying: "",
    });

    const playGame = async () => {
        try {
            const userRef = doc(db, "users", await AsyncStorage.getItem("userId"));
            await updateDoc(userRef, {
                isFindMatch: true,
            });

            // const user = await getDoc(userRef)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        async function setUser() {
            const userId = await AsyncStorage.getItem("userId");
            const { data } = await axios({
                method: "GET",
                url: `http://192.168.55.116:3001/users/${userId}`,
            });

            setCurrentUser({
                userId: data.id,
                username: data.username,
                isFindMatch: data.isFindMatch,
                isPlaying: data.isPlaying,
            });
        }
        setUser();
    }, []);

    useEffect(() => {
        // const user = query(collection(db, "users"), where("i", "==", "true"));
        (async () => {
            try {
                const unsubscribe = onSnapshot(doc(db, "users", await AsyncStorage.getItem("userId")), async (doc) => {
                    const user = doc.data();
                    const userId = await AsyncStorage.getItem("userId");
                    if (user.isFindMatch) {
                        const { data: allRooms } = await axios({
                            method: "GET",
                            url: "http://192.168.55.116:3001/rooms",
                        });

                        if (allRooms.length === 0) {
                            const { data: newRoom } = await axios({
                                method: "POST",
                                url: `http://192.168.55.116:3001/rooms/createRoom/${userId}`,
                            });
                            console.log(newRoom, "buat room baru");
                            navigation.navigate("Gamescreen", {
                                roomId: newRoom.id,
                            });
                        }

                        if (allRooms.length > 0 && allRooms[0].player2 === null) {
                            const { data: joinRoom } = await axios({
                                method: "PUT",
                                url: `http://192.168.55.116:3001/rooms/${allRooms[0].id}`,
                                data: {
                                    userId,
                                },
                            });
                            console.log(joinRoom, "player 2 terisi bung");
                            navigation.navigate("Gamescreen", {
                                roomId: allRooms[0].id,
                            });
                        }
                    }
                });

                return unsubscribe;
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <SafeAreaView>
            <View style={{ height: "100%" }}>
                <View style={{ alignItems: "center", height: "35%", backgroundColor: "white" }}>
                    <View
                        style={{
                            height: "10%",
                            width: "100%",
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#B19C77" }}>Mythology</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#FEE4BD",
                            width: "37%",
                            height: "50%",
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 10,
                        }}
                    >
                        <Image
                            style={{ width: "80%", height: "80%" }}
                            source={{
                                uri: "https://img.freepik.com/free-vector/characters-celebrating-holi-festival-concept_23-2148405462.jpg?w=1060&t=st=1677830591~exp=1677831191~hmac=cb58a785423477d3131c5bc4d671edd861a29192d02521e4fe9431928c177f8e",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: "#B19C77",
                            marginTop: 30,
                            width: "35%",
                            height: "15%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            borderColor: "#FEE4BD",
                        }}
                    >
                        <Pressable onPress={playGame}>
                            <Text style={{ color: "white" }}>Play Game</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ width: "100%", height: "65%", paddingHorizontal: 15, borderTopWidth: 1, borderTopColor: "grey" }}>
                    <View
                        style={{
                            height: "15%",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            padding: 5,
                            alignItems: "center",
                            borderBottomWidth: 1,
                        }}
                    >
                        <View
                            style={{
                                width: "16%",
                                height: "85%",
                                backgroundColor: "white",
                                borderRadius: 100,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                style={styles.image}
                                source={{
                                    uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 18 }}>Daffa the Boy</Text>
                    </View>
                    <View style={{ height: "auto", borderBottomWidth: 1 }}>
                        <Text style={{ marginBottom: 10, marginTop: 10 }}>Watch me whip watch me nae nae eeeeeeeeeeeeeeeeweeeeeeeeeee</Text>
                    </View>
                    <View style={{ height: 50, justifyContent: "center", marginBottom: 5 }}>
                        <View style={{ width: "10%", height: "70%" }}>
                            <Image style={{ width: "100%", height: "100%" }} source={require("../assets/icons8-response-80.png")} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: "90%",
        borderRadius: 100,
    },
});
