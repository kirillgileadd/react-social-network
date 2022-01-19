const initialState = {
    posts: [
        {
            id: 1,
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam distinctio ea minima nulla possimus qui ratione sunt vitae. Deserunt facere impedit numquam.',
            likes: {
                likesCount: 0,
                isLiked: false,
            },
            registeredAt: '10 minutes ago'
        }
    ],
    profile: null,
    isLoading: false
}

export const personalPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST': {
            let currentPosts = action.payload
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                value: currentPosts,
                likes: {
                  likesCount: 0
                },
                registeredAt: 'just now'
            }
            return {
                ...state,
                posts: !state.posts ? newPost : [newPost, ...state.posts]
            }
        }
        case 'ADD_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post) => {
                    if (post.id === action.payload.id) {
                        return {
                            ...post,
                            likes: {
                                likesCount: !action.payload.likes.isLiked ? action.payload.likes.likesCount + 1 : action.payload.likes.likesCount - 1,
                                isLiked: !action.payload.likes.isLiked
                            }
                        }
                    }
                    return post
                })
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.payload,
                isLoading: true
            }
        }
        case 'SET_USER_PROFILE_LOADING': {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        default:
            return state
    }
}