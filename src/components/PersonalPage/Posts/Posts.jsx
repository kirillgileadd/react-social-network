import React from 'react';
import {Box} from "@mui/material";
import PostInput from "./PostInput";
import PostItem from "./PostItem";

const Posts = ({posts, addPost, addLike, photos, fullname}) => {

    return (
        <Box>
            <PostInput addPost={addPost} photos={photos}  />
            {
                posts.map((post) => <PostItem key={post.id} {...post} photos={photos} fullname={fullname} addLike={addLike}/>)
            }
        </Box>
    );
};

export default Posts;