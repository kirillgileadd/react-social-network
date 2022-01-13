import React from 'react';
import {Box, InputBase, Typography} from "@mui/material";
import {StyledPaper} from "../PersonalPage";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const Posts = () => {
    return (
        <Box>
            <StyledPaper>
                <Box
                    component="form"
                    sx={{display: 'flex', alignItems: 'center'}}
                >

                    <InputBase
                        sx={{ flex: 1 }}
                        placeholder="Write a message..."
                        inputProps={{ 'aria-label': 'Write a message' }}
                    />
                    <IconButton color={'primary'} aria-label="menu">
                        <SendIcon />
                    </IconButton>
                </Box>
            </StyledPaper>
        </Box>
    );
};

export default Posts;