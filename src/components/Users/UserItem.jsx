import React from 'react';
import {Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {stringAvatar, stringToColor} from "../../UI/UsersAvatar";
import {StyledLink} from "../../UI/Links/StyledLink";


const UserItem = ({name, photos, status, location, followed, id, followUser, unfollowUser}) => {
    return (
        <>
            <ListItem alignItems="flex-start" sx={{p: 0, width: '100%'}}>
                <ListItemAvatar sx={{mr: 2}}>
                    <StyledLink to={`/${id}`}>
                        <Avatar {...stringAvatar(name.toUpperCase())}
                                sx={{height: 80, width: 80, bgcolor: stringToColor(name),}} src={photos.large}/>
                    </StyledLink>
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
                            {name}
                        </Typography>
                    }
                    secondary={
                        <>
                            <Typography
                                variant="body2"
                                noWrap
                                width={"300px"}
                            >
                                {status ? status : 'Status'}
                            </Typography>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color={'primary.main'}
                                >
                                    White a message
                                </Typography>
                                {
                                    followed ? (
                                        <Button onClick={() => unfollowUser(id)}>
                                            Unfollow
                                        </Button>
                                    ) : (
                                        <Button onClick={() => followUser(id)}>
                                            Follow
                                        </Button>
                                    )
                                }

                            </Box>

                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
};

export default UserItem;