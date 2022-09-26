
import { firebase } from "@react-native-firebase/auth"

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_STARTED = 'REGISTER_STARTED'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const registerSuccess = (email) => {

    return {
        type: REGISTER_SUCCESS,
        payload: email
    }
}

export const registerStarted = () => {
    return {
        type: REGISTER_STARTED
    }
}

export const registerFail = (fail) => {
    return {
        type: REGISTER_FAIL,
        payload: fail
    }
}

export const fetchRegister = (email, password) => async (dispatch, getState) => {
    try {
        dispatch(registerStarted())
        console.log(getState())
        let response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        dispatch(registerSuccess(response.user.email))
    } catch (e) {
        dispatch(registerFail(e.nativeErrorMessage))
    }
}
