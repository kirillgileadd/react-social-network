import {profileAPI, usersAPI} from "../../api/api";

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

export const getStatusAction = (status) => ({
    type: 'SET_USER_STATUS',
    payload: status
})
export const getPhotosAction = (photos) => ({
    type: 'SET_USER_PHOTO',
    payload: photos
})

export const setLoadingStatusAction = (value) => ({
    type: 'SET_LOADING_USER_STATUS',
    payload: value
})


export const fetchProfile = (userId) => (dispatch) => {
    dispatch(setUserProfileLoadingAction(false))
    profileAPI.getProfile(userId).then(response => {
        dispatch(setProfileAction(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(getStatusAction(response.data))
    })
}

export const onSavePhoto = (photo) => (dispatch) => {
    profileAPI.savePhoto(photo).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getPhotosAction(response.data.data.photos))
        }
    })
}

export const putStatus = (status,  setAnchorEl) => (dispatch) => {
    dispatch(setLoadingStatusAction(false))
    profileAPI.putStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(getStatusAction(status))
            dispatch(setLoadingStatusAction(true))
            setAnchorEl(null)
        }
    })
}

