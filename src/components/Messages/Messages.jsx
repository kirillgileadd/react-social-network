import React from 'react';
import {Grid, InputBase, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Dialogs from "./Dialogs";
import MessagesItems from "./MessagesItems";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import {StyledPaper} from "../../UI/StyledPaper";


const MessagesSearch = () => {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderBottom: '1px solid lightgray'}}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    )
}

const SendMessageInput = () => {
    return (
        <Box
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderTop: '1px solid lightgray'}}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Write a message..."
                inputProps={{ 'aria-label': 'Write a message' }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SendIcon />
            </IconButton>
        </Box>
    )
}


const Messages = () => {
    return (
        <StyledPaper sx={{overflowY: 'hidden', height: 'calc(100vh - 97px)', p: 0}}>
            <Box sx={{height: '100%'}}>
                <Grid container sx={{height: '100%'}}>
                    <Grid item xs={4} sx={{height: '100%', borderRight: '1px solid lightgray'}}>
                        <MessagesSearch/>
                        <Dialogs/>
                    </Grid>
                    <Grid item xs={8} sx={{display: "flex", justifyContent: "space-between", flexDirection: 'column'}}>
                        <MessagesItems dialogs={true}/>
                        <SendMessageInput/>
                    </Grid>
                </Grid>
            </Box>
        </StyledPaper>
    );
};

export default Messages;