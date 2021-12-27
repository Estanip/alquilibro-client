import { alertActionsTypes as Alerts } from '../actions_types/alertActionsTypes'

export function success(message:any) {
    return {
        type: Alerts.SUCCESS, message
    }
}

export function error(message:any) {
    return {
        type: Alerts.ERROR, message
    }
}

export function clear() {
    return {
        type: Alerts.CLEAR
    }
}