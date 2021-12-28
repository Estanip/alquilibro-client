import AsyncStorage from '@react-native-async-storage/async-storage';

export function authHeader() {


    // retorna el header de autorizacion con el JWT 
    let user:any = AsyncStorage.getItem('user');

    console.log("AUTHEADER", user )


    if (user && user.token) {
        return {
            'Authorization': 'Bearer ' + user.token
        }
    } else {
        return {};
    }
};