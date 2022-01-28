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

export const fetchUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch(setLoading(false))
    usersAPI.getUsers(pageSize, currentPage).then(response => {
        dispatch(setUsersAction(response.data))
    })
}

export const searchUsers = (pageSize, currentPage, debouncedSearchTerm) => (dispatch) => {
    if (debouncedSearchTerm) {
        dispatch(setLoading(false))
        usersAPI.searchUsers(pageSize, currentPage, debouncedSearchTerm).then(results => {
            if(Math.ceil(results.data.totalCount / pageSize) < currentPage) {
                dispatch(changePageNumberAction(1))
            }
            dispatch(setLoading(true))
            dispatch(setUsersAction(results.data))
        });
    } else {
        dispatch(fetchUsers(pageSize, currentPage))
    }
}

export const unfollowSuccess = (userId, setLoadingButton, setFollowed) => (dispatch) => {
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowAction(userId))
            setFollowed(false)
            setLoadingButton(false)
        }
    })
}

export const followSuccess = (userId, setLoadingButton, setFollowed) => (dispatch) => {
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followAction(userId))
            setFollowed(true)
            setLoadingButton(false)
        }
    })
}