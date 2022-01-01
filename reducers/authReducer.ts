import { userActionsTypes } from "../actions_types/userActionsTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

let user: any = AsyncStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action: any) {
    switch (action.type) {
        case userActionsTypes.LOGIN_REQUEST:
            return {
                loggedIn: true,
                user: action.user
            }
        case userActionsTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }
        case userActionsTypes.REGISTER_SUCCESS:
            return {};
        case userActionsTypes.REGISTER_FAILURE:
            return {};
        case userActionsTypes.LOGIN_FAILURE:
            return {};
        case userActionsTypes.LOGOUT:
            return {};

        default:
            return state;
    }
};