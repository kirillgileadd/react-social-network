
const initialState = {
    posts: [
        {
            id: 1,
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam distinctio ea minima nulla possimus qui ratione sunt vitae. Deserunt facere impedit numquam.',
            likesCount: 0,
            registeredAt: '10 minutes ago'
        }
    ]
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST': {
            let currentPosts = action.payload
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                value: currentPosts,
                likesCount: 0,
                registeredAt: 'just now'
            }
            return {
                ...state,
                posts: !state.posts ? newPost : [...state.posts, newPost]
            }
        }
        case 'ADD_LIKE': {
            return  {
                ...state,
            }
        }
        default:
            return state
    }
}