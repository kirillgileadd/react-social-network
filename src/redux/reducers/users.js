import {setUsersAction} from "../actions/users";

const initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 5,
    isLoading: false,
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: [...action.payload],
                isLoading: true,
            }
        }
        case 'CURRENT_PAGE_NUMBER': {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case 'SET_USERS_TOTAL_COUNT': {
            return {
                ...state,
                totalCount: action.payload
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state
    }
}