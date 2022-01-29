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

export const setOwnerPhotoAction = (photo) => ({
    type: 'SET_OWNER_PHOTO',
    payload: photo
})


export const fetchProfile = (userId) => async (dispatch) => {
    dispatch(setUserProfileLoadingAction(false))
    let response = await profileAPI.getProfile(userId)
    dispatch(setProfileAction(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(getStatusAction(response.data))
}


export const putStatus = (status, setAnchorEl) => async (dispatch) => {
    dispatch(setLoadingStatusAction(false))
    let response = await profileAPI.putStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(getStatusAction(status))
        dispatch(setLoadingStatusAction(true))
        setAnchorEl(null)
    }
}

export const onSavePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(getPhotosAction(response.data.data.photos))
    }
}
export const setOwnerPhoto = (ownerId) => async (dispatch) => {
    let response = await profileAPI.getProfile(ownerId)
    dispatch(setOwnerPhotoAction(response.data.photos.small))
}

export const editProfileInfo = (data) => async (dispatch) => {
    let response = await profileAPI.putProfile(data)
    if (response.data.resultCode === 0) {
        dispatch(setProfileAction(data))
    }
}
