const initialState = {
    email: null,
    id: null,
    login: null,
    authData: {
        isAuth: false,
        AuthLoaded: false
    }
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.payload.data,
                authData: {
                    ...state.authData,
                    isAuth: action.payload.isAuth,
                }
            }
        }
        case 'SET_LOADING_USER_DATA': {
            return {
                ...state,
                authData: {
                    ...state.authData,
                    AuthLoaded: true,
                }
            }
        }
        default:
            return state
    }
}