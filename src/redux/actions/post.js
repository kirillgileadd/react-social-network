export const addPostAction = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const addLikeAction = (id) => ({
    type: 'ADD_LIKE',
    payload: id
})