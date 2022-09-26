import { firebase } from "@react-native-firebase/auth"
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_STARTED = 'LOGIN_STARTED'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const loginSuccess = (email) => {

    return {
        type: LOGIN_SUCCESS,
        payload: email
    }
}

export const loginStarted = () => {
    return {
        type: LOGIN_STARTED
    }
}

export const loginFail = (fail) => {
    return {
        type: LOGIN_FAIL,
        payload: fail
    }
}

export const fetchLogin = (email, password) => async (dispatch, getState) => {
    try {
        dispatch(loginStarted())
        let response = await firebase.auth().signInWithEmailAndPassword(email, password)
        dispatch(loginSuccess(response.user.email))
    } catch (e) {
        dispatch(loginFail(e.nativeErrorMessage))
    }
}
