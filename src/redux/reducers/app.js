const initialState = {
    initialize: false
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZE_APP': {
            return {
                ...state,
                initialize: action.payload
            }
        }
        default:
            return state
    }
}