import axios from "axios";
import { deployApi, localApi } from "../constants/Apis";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function login(username: string, password: string) {

    let user = await axios.post(`${localApi}/`, {
        username, password
    });

    console.log(user);

    AsyncStorage.setItem('user', JSON.stringify(user));

    return user;
};

function logout() {
    // remove user from Local Storage
    AsyncStorage.removeItem('user');
};

const userServices = { login, logout };

export default userServices;