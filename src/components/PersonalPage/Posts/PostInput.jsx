import React, {useState} from 'react';
import {Avatar, Box, InputBase} from "@mui/material";
import avatar from "../../../images/img.jpg";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import {StyledPaper} from "../../../UI/StyledPaper";
import {AddPostInput} from "../../../UI/AddPostInput";
import noAvatarSmall from '../../../images/noAvatarSmall.svg'


const PostInput = ({addPost, ownerPhoto}) => {
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
                <Avatar alt="Remy Sharp" src={ownerPhoto ?? noAvatarSmall}/>
                <Box sx={{width: "100%"}} display={'flex'}>
                    <AddPostInput
                        multiline
                        maxRows={6}
                        value={postInputValue}
                        onChange={handlePostInputValue}
                        sx={{flex: 1, m: '0px 10px', width: '100%'}}
                        placeholder="Share something new..."
                        inputProps={{'aria-label': 'Share something new'}}
                    />
                    <IconButton sx={{alignSelf: 'flex-end'}} onClick={() => addPost(postInputValue, setPostInputValue)} color={'primary'}
                                aria-label="menu">
                        <SendIcon/>
                    </IconButton>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default PostInput;