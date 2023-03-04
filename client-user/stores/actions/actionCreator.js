import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import db from "../../firebaseConfig/connection"
import { collection, query, where, onSnapshot } from "firebase/firestore"
export const login =
    ({ email, password }) =>
    async (dispatch) => {
        try {
         
            const { data } = await axios({
                method: "post",
                url: `http://192.168.2.234:3001/users/login`,
                data: {
                    email,
                    password,
                },
            })
            await AsyncStorage.setItem("access_token", data.access_token)
            await AsyncStorage.setItem("userId", data.id)
            await AsyncStorage.setItem("username", data.username)
            const value = await AsyncStorage.getItem("access_token")
            console.log(value)
        } catch (err) {
            console.log(err)
        }
    }
