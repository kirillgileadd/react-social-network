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
