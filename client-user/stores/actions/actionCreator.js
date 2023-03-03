import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const login =
    ({ email, password }) =>
    async (dispatch) => {
        try {
            const {data} = await axios({
                method:'post',
                url:`http://192.168.2.234:3001/users/login`,
                data:{
                    email,
                    password
                }
            })
            await AsyncStorage.setItem("access_token",data.access_token)
            await AsyncStorage.setItem("userId",data.id)
            await AsyncStorage.setItem("username",data.username)
        } catch (err) {
            console.log(err)
        }
    }
