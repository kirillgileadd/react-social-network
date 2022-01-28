import React from 'react';
import {Box} from "@mui/material";
import PostInput from "./PostInput";
import PostItem from "./PostItem";

const Posts = ({posts, addPost, addLike, photos, fullname, ownerPhoto}) => {

    return (
        <Box>
            <PostInput addPost={addPost} ownerPhoto={ownerPhoto}  />
            {
                posts.map((post) => <PostItem key={post.id} {...post} photos={photos} fullname={fullname} addLike={addLike}/>)
            }
        </Box>
    );
};

export default Posts;