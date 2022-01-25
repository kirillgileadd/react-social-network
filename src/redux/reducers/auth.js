const initialState = {
    email: null,
    id: null,
    login: null,
    authData: {
        isAuth: false,
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
        default:
            return state
    }
}