import {authAPI, profileAPI} from "../../api/api";
import {setProfileAction, setUserProfileLoadingAction} from "./personalPage";

export const setAuthUserDataAction = (data) => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
}

export const setLoadingAuthUserDataAction = (value) => {
    return {
        type: 'SET_LOADING_USER_DATA',
        payload: value
    }
}

export const authUser = () => (dispatch) => {
    authAPI.auth().then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(setAuthUserDataAction({data: response.data.data, isAuth: true}))
        }
        dispatch(setLoadingAuthUserDataAction(true))
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if(response.data.resultCode === 0 ) {
            dispatch(authUser())
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
