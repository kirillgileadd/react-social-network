import {authAPI, profileAPI} from "../../api/api";
import {setProfileAction, setUserProfileLoadingAction} from "./personalPage";

export const setAuthUserDataAction = (data) => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
}


export const initializeAction = (value) => {
    return {
        type: 'INITIALIZE_APP',
        payload: value
    }
}

export const authUser = () => (dispatch) => {
    return authAPI.auth().then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(setAuthUserDataAction({data: response.data.data, isAuth: true}))
        }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(authUser())
        } else {
            alert('password or login incorrect')
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(setAuthUserDataAction({data: null, isAuth: false}))
        }
    })
}


export const initialize = () => (dispatch) => {
   let promise = dispatch(authUser())
    promise.then(() => {
        dispatch(initializeAction(true))
    })
}

