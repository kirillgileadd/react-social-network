import axios from "axios";

export const followAction = (userId) => {
    return {
        type: 'FOLLOW',
        payload: userId
    }
}
export const unfollowAction = (userId) => {
    return {
        type: 'UNFOLLOW',
        payload: userId
    }
}

export const fetchUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch(setLoading(false))
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${String(currentPage)}&count=${(String(pageSize))}`).then(response => {
        dispatch(setUsersAction(response.data.items))
        dispatch(setUsersTotalCountAction(response.data.totalCount))

    })
}

export const setLoading = (value) => ({
    type: 'SET_LOADING',
    payload: value
})

export const setUsersAction = (users) => ({
    type: 'SET_USERS',
    payload: users
})

export const setUsersTotalCountAction = (count) => ({
    type: 'SET_USERS_TOTAL_COUNT',
    payload: count
})

export const changePageNumberAction = (currentPage) => ({
    type: 'CURRENT_PAGE_NUMBER',
    payload: currentPage
})