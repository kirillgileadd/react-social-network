import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import WorkIcon from "@mui/icons-material/Work";

export default function Dialogs() {
    return (
        <List sx={{ height: '100%', width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflowY: 'auto', p: 0 }}>
            <ListItem alignItems="flex-start" sx={{borderBottom: '1px solid lightgray'}}>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
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
