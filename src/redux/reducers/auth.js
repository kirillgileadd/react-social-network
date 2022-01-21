
const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default:
            return state
    }
}