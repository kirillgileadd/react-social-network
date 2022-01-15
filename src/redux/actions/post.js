export const addPostAction = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const addLikeAction = ({id, likesCount}) => ({
    type: 'ADD_LIKE',
    payload: {
        id,
        likesCount
    }
})