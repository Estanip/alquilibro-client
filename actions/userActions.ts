import { useNavigation } from "@react-navigation/native";
import { alertActionsTypes as Alerts } from "../actions_types/alertActionsTypes";
import { userActionsTypes } from "../actions_types/userActionsTypes";
import userServices from "../services/userServices";

export function login(username: string, password: string) {

    return (dispatch: any) => {
        dispatch(request({ username }));

        userServices.login(username, password)
            .then(
                (user: any) => {
                    dispatch(success(user));
/*                     navigation.navigate('Home')
 */                },
                (error: any) => {
                    dispatch(failure(error.toString()));
                    dispatch(Alerts.ERROR(error.toString()))
                }
            )
    }

    function request(user:any) { return { type: userActionsTypes.LOGIN_REQUEST, user } }
    function success(user:any) { return { type: userActionsTypes.LOGIN_SUCCESS, user } }
    function failure(error:any) { return { type: userActionsTypes.LOGIN_FAILURE, error } }

}

export function logout() {
    userServices.logout();
    return { type: userActionsTypes.LOGOUT };
}