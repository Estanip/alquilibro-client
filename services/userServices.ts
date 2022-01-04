import axios from "axios";
import { deployApi, localApi } from "../constants/Apis";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function login(username: string, password: string) {

    let res = await axios.post(`${deployApi}/api/auth`, {
        username, password
    });

    console.log("ENTRO AL SERVICE", res.data)

    if (res.data.ok === true) {

        let user = res.data;

        AsyncStorage.setItem('user', JSON.stringify(user));

        return res.data;

    } {

        return res.data;
    }

};

async function register(username: string, password: string, image: string) {

    let res = await axios.post(`${deployApi}/api/auth/new`, {
        username,
        password,
        image
    });

    console.log("ENTRO AL SERVICE", res.data)


    return res.data;
}

function logout() {
    // remove user from Local Storage
    AsyncStorage.removeItem('user');
};

const userServices = { login, logout, register };

export default userServices;