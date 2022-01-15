import React from 'react';
import {Box} from "@mui/material";
import PostInput from "./PostInput";
import PostItem from "./PostItem";
import {addLikeAction, addPostAction} from "../../../redux/actions/post";
import {useDispatch, useSelector} from "react-redux";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(({posts}) => posts)

    const addPost = (post, setPostVale) => {
        if(post) {
            dispatch(addPostAction(post))
            setPostVale('')
        }
    }

    const addLike = (post) => {
        dispatch(addLikeAction(post))
    }

    return (
        <Box>
            <PostInput addPost={addPost}  />
            {
                posts.map((post) => <PostItem key={post.id} {...post} addLike={addLike}/>)
            }
        </Box>
    );
};

export default Posts;