import {usersAPI} from "../../api/api";

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

export const setLoading = (value) => ({
    type: 'SET_LOADING',
    payload: value
})

export const setUsersAction = (value) => ({
    type: 'SET_USERS',
    payload: {
        users: value.items,
        totalCount: value.totalCount
    }
})

export const cleanUsersAction = () => ({
    type: 'CLEAN_USERS',
    payload: {
        users: [],
        totalCount: 0,
    }
})


export const changePageNumberAction = (currentPage) => ({
    type: 'CURRENT_PAGE_NUMBER',
    payload: currentPage
})

export const fetchUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setLoading(false))
    let response = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(setUsersAction(response.data))
}

export const searchUsers = (pageSize, currentPage, debouncedSearchTerm) => async (dispatch) => {
    if (debouncedSearchTerm) {
        let response = await usersAPI.searchUsers(pageSize, currentPage, debouncedSearchTerm)
        dispatch(setLoading(false))
        if (Math.ceil(response.data.totalCount / pageSize) < currentPage) {
            dispatch(changePageNumberAction(1))
        }
        dispatch(setLoading(true))
        dispatch(setUsersAction(response.data))
    } else {
        dispatch(fetchUsers(pageSize, currentPage))
    }
}

export const unfollowSuccess = (userId, setLoadingButton, setFollowed = null) => async (dispatch) => {
    let response = await usersAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowAction(userId))
        setLoadingButton(false)
        setFollowed(false)
    }
}

export const followSuccess = (userId, setLoadingButton, setFollowed = null) => async (dispatch) => {
    let response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followAction(userId))
        setLoadingButton(false)
        setFollowed(true)
    }
}