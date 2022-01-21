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

export const unfollowSuccess = (userId, setLoadingButton) => (dispatch) => {
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowAction(userId))
            setLoadingButton(false)
        }
    })
}

export const followSuccess = (userId, setLoadingButton) => (dispatch) => {
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followAction(userId))
            setLoadingButton(false)
        }
    })
}