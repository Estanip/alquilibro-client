import AsyncStorage from '@react-native-async-storage/async-storage';

export function authHeader() {

    // retorna el header de autorizacion con el JWT 
    let user = JSON.parse(AsyncStorage.getItem('user'));

    if (user && user.token) {
        return {
            'Authorization': 'Bearer ' + user.token
        }
    } else {
        return {};
    }
};