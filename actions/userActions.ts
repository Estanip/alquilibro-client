import { alertActions } from "./alertActions";
import { userActionsTypes } from "../actions_types/userActionsTypes";
import userServices from "../services/userServices";

export function login(username: string, password: string) {

    return async (dispatch: any) => {

        /*        dispatch(request({ username })); */

        let res = await userServices.login(username, password);

        if (res.ok === false) {
            dispatch(failure(res.msg));
            dispatch(alertActions.error(res.msg))
        }
        if (res.ok === true) {
            dispatch(success(res.name))
            dispatch(alertActions.success("Usuario logueado con exito"))
        }
    }

    /*     function request(user: any) {
            return {
                type: userActionsTypes.LOGIN_REQUEST,
                user
            }
        } */

    function success(user: any) {
        return {
            type: userActionsTypes.LOGIN_SUCCESS,
            user
        }
    }

    function failure(error: any) {
        return {
            type: userActionsTypes.LOGIN_FAILURE,
            error
        }
    }

};

export function logout() {

    userServices.logout();
    return {
        type: userActionsTypes.LOGOUT
    };

};

export function createUser(username: string, password:string) {

    return async (dispatch:any) => {

        let res = await userServices.register(username, password);

        if (res.ok === false) {
            dispatch(failure(res.msg));
            dispatch(alertActions.error(res.msg))
        }
        if (res.ok === true) {
            dispatch(success(res.name))
            dispatch(alertActions.success("Usuario creado con exito"))
        }

    }

    function success(user: any) {
        return {
            type: userActionsTypes.REGISTER_SUCCESS,
            user
        }
    }

    function failure(error: any) {
        return {
            type: userActionsTypes.REGISTER_FAILURE,
            error
        }
    }

};  