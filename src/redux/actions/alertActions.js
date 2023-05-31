import { SHOW_ALERT,CLOSE_ALERT } from "../types";

export function showAlert(alertMessage) {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: alertMessage
        })
        setTimeout(() => {
                dispatch({
                    type:CLOSE_ALERT
                })
        }, 4000)    
    }
}

export function closeAlert() {
    return (dispatch) => {
        dispatch({
            type: CLOSE_ALERT,
        })
    }
}