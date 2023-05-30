import { AUTH_WINARY, LOGIN_METAMASK } from "../types";
import jwtGenerator from "../../../helpers/jwtGenerator";
import clientAxios from "@/config/clientAxios";


export function loginApp(public_key) {

        const token =  jwtGenerator(public_key)

    return async (dispatch) => {
        try {

                clientAxios.post('/login',token)

            dispatch({
                type: SHOW_ALERT,
                payload: alertMessage
            })
        }catch(error) {
            console.log(error.message)
        }
    }
}