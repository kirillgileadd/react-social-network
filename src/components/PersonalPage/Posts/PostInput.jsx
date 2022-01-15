import React, {useState} from 'react';
import {Avatar, Box, InputBase} from "@mui/material";
import avatar from "../../../images/img.jpg";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import {StyledPaper} from "../../../UI/StyledPaper";
import {AddPostInput} from "../../../UI/AddPostInput";

const PostInput = ({addPost}) => {
    const [postInputValue, setPostInputValue] = useState('')

    const handlePostInputValue = (e) => {
        const {value} = e.target
        setPostInputValue(value)
    }
    return (
        <StyledPaper>
            <Box
                component="form"
                sx={{display: 'flex', alignItems: 'flex-start'}}
            >
                <Avatar alt="Remy Sharp" src={avatar}/>
                <AddPostInput
                    multiline
                    maxRows={6}
                    value={postInputValue}
                    onChange={handlePostInputValue}
                    sx={{ flex: 1, m: '0px 10px' }}
                    placeholder="Share something new..."
                    inputProps={{ 'aria-label': 'Share something new' }}
                />
                <IconButton onClick={() => addPost(postInputValue, setPostInputValue)} color={'primary'} aria-label="menu">
                    <SendIcon />
                </IconButton>
            </Box>
        </StyledPaper>
    );
};

export default PostInput;