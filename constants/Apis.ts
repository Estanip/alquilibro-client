import { Platform } from "react-native";

console.log(Platform.OS)

const localApi = Platform.OS === 'android' ? "http://192.168.1.2:3008" : "http://localhost:3008"
const deployApi = "https://alquilibro.herokuapp.com";

export { localApi, deployApi};