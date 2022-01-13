import React from 'react';
import {Avatar, Box, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Typography from "@mui/material/Typography";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import List from "@mui/material/List";

const MessagesItems = ({dialogs}) => {
    return dialogs ?
        (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText secondary="Hi">
                        <Typography color={'primary'} fontWeight={'bold'} >
                            Diana
                        </Typography>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Kirill" secondary="I am here" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Diana" secondary="Welcome back" />
                </ListItem>
            </List>
        ) :
        (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
                <ContactSupportOutlinedIcon color={'primary'} sx={{ fontSize: 60, display: 'block' }}/>
                <Typography variant={'body1'}>Select chat :D</Typography>
            </Box>
        )
};

export default MessagesItems;