import { alertActionsTypes as Alerts } from '../actions_types/alertActionsTypes';

export const alertActions = {
    error,
    success,
    clear
}

function success(message: any) {
    return {
        type: Alerts.SUCCESS,
        message
    }
}

function error(message: any) {
    return {
        type: Alerts.ERROR,
        message
    }
}

function clear() {
    return {
        type: Alerts.CLEAR
    }
}