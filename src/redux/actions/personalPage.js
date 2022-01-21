import {usersAPI} from "../../api/api";

export const addPostAction = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const addLikeAction = ({id, likes}) => ({
    type: 'ADD_LIKE',
    payload: {
        id,
        likes,
    }
})

export const setProfileAction = (profile) => ({
    type: 'SET_USER_PROFILE',
    payload: profile
})

export const setUserProfileLoadingAction = (value) => ({
    type: 'SET_USER_PROFILE_LOADING',
    payload: value
})


export const fetchProfile = (userId) => (dispatch) => {
    dispatch(setUserProfileLoadingAction(false))
    usersAPI.getProfile(userId).then(response => {
        dispatch(setProfileAction(response.data))
    })
}
