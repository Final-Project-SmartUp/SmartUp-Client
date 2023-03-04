import { TextInput, View, Button, Text, ScrollView, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Gamescreen() {
    //

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.profileScoreContainer}>
                    <View style={styles.profileScore}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://img.freepik.com/free-vector/characters-celebrating-holi-festival-concept_23-2148405462.jpg?w=1060&t=st=1677830591~exp=1677831191~hmac=cb58a785423477d3131c5bc4d671edd861a29192d02521e4fe9431928c177f8e",
                            }}
                        />
                        <View style={styles.textScoreContainer}>
                            <Text>Beauty</Text>
                            <Text>100</Text>
                        </View>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={{ fontSize: 13 }}>Time Left</Text>
                        <Text>Hehe</Text>
                    </View>
                    <View style={styles.profileScoreLeftContainer}>
                        <View style={styles.profileScoreLeft}>
                            <Text>Beauty</Text>
                            <Text>100</Text>
                        </View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://img.freepik.com/free-vector/characters-celebrating-holi-festival-concept_23-2148405462.jpg?w=1060&t=st=1677830591~exp=1677831191~hmac=cb58a785423477d3131c5bc4d671edd861a29192d02521e4fe9431928c177f8e",
                            }}
                        />
                    </View>
                </View>
                <View style={styles.questionBoxContainer}>
                    <View style={styles.questionBox}>
                        <Text style={styles.question}>Which Apple computer was the first personal computer sold with a GUI</Text>
                    </View>
                </View>
                <View style={styles.answerContainer}>
                    <View style={styles.answerA}>
                        <Text style={styles.textAnswer}>ANJING</Text>
                    </View>
                    <View style={styles.answerB}>
                        <Text style={styles.textAnswer}>ANJING</Text>
                    </View>
                    <View style={styles.answerC}>
                        <Text style={styles.textAnswer}>ANJING</Text>
                    </View>
                    <View style={styles.answerD}>
                        <Text style={styles.textAnswer}>ANJING</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F8FF",
    },
    profileScoreContainer: {
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5,
        paddingRight: 19,
    },
    profileScore: {
        width: "20%",
        height: "80%",
        marginLeft: 10,
        flexDirection: "row",
    },
    image: {
        width: "90%",
        height: "90%",
        borderRadius: 100,
    },
    textScoreContainer: { marginLeft: 10, justifyContent: "center" },
    timeContainer: {
        width: "20%",
        height: "80%",
        marginLeft: 77,
        alignItems: "center",
    },
    profileScoreLeftContainer: {
        width: "20%",
        height: "80%",
        marginLeft: 25,
        flexDirection: "row",
    },
    profileScoreLeft: {
        marginLeft: 10,
        justifyContent: "center",
        marginRight: 10,
        alignItems: "flex-end",
    },
    questionBoxContainer: {
        width: "100%",
        height: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    questionBox: {
        backgroundColor: "white",
        marginTop: 40,
        width: "80%",
        height: "90%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    question: { textAlign: "center", fontSize: 25, fontWeight: "bold" },
    answerContainer: {
        width: "100%",
        height: "65%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    answerA: {
        backgroundColor: "#FFC3BD",
        width: "70%",
        height: "15%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    answerB: {
        backgroundColor: "#C8ECA4",
        width: "70%",
        height: "15%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    answerC: {
        backgroundColor: "#D8EBEB",
        width: "70%",
        height: "15%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    answerD: {
        backgroundColor: "#FEE4BD",
        width: "70%",
        height: "15%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    textAnswer: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
});
