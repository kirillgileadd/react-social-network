import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Dialogs() {
    return (
        <List sx={{ height: '100%', width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflowY: 'auto', p: 0 }}>
            <ListItem alignItems="flex-start" sx={{borderBottom: '1px solid lightgray'}}>
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Diana"
                    secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                Welcome back
                            </Typography>
                    }
                />
            </ListItem>
        </List>
    );
}