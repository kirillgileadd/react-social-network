import React from 'react';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserItem = () => {
    return (
        <>
            <ListItem alignItems="flex-start" sx={{p: '15px 0px', width: '100%'}}>
                <ListItemAvatar sx={{mr: 2}}>
                    <Avatar sx={{height: 90, width: 90}} alt="User photo" src="/static/images/avatar/1.jpg">KG</Avatar>
                </ListItemAvatar>
                <ListItemText
                    sx={{
                        '& .MuiTypography-root': {
                            m: "6px 0"
                        }
                    }}
                    primary={
                        <Typography
                            sx={{}}
                            fontWeight={'bold'}
                            color={'primary.main'}
                        >
                            Kirill Gilead
                        </Typography>
                    }
                    secondary={
                        <>
                            <Typography
                                variant="body2"
                            >
                                Lorem ipsum dolor sit amet.
                            </Typography>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color={'primary.main'}
                            >
                                White a message
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
};

export default UserItem;