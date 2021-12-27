import { alertActionsTypes as Alerts } from "../actions_types/alertActionsTypes";

const initialState = {};

export default function alert(state = initialState, action: any) {

    switch (action.type) {
        case Alerts.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message

            };
        case Alerts.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case Alerts.CLEAR:
            return {};
        default:
            return state;
    }
}