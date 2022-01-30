import React, {useState} from 'react';
import {Avatar, Button, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {stringAvatar, stringToColor} from "../../UI/UsersAvatar";
import {StyledLink} from "../../UI/Links/StyledLink";
import {useSelector} from "react-redux";


const UserItem = ({name, photos, status, followed, id, followUser, unfollowUser}) => {
    const currentUserId = useSelector(({auth}) => auth.id)
    const [loadingButton, setLoadingButton] = useState(false)

    return (
        <>
            <ListItem alignItems="flex-start" disablePadding>
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
                        <StyledLink to={`/${id}`}>
                            <Typography
                                sx={{}}
                                fontWeight={'bold'}
                                color={'primary.main'}
                            >
                                {name}
                            </Typography>
                        </StyledLink>
                    }
                    secondary={
                        <>
                            <Typography
                                variant="body2"
                                noWrap
                                maxWidth={"300px"}
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
                                    Write a message
                                </Typography>
                                {
                                    currentUserId === id ?
                                        <Button><StyledLink to={`/${currentUserId}`}>Profile</StyledLink></Button> :
                                        followed ? (
                                            <>
                                                <Button
                                                    disabled={loadingButton}
                                                    onClick={() => {
                                                        setLoadingButton(true)
                                                        unfollowUser(id, setLoadingButton)
                                                    }}>
                                                    Unfollow
                                                </Button>
                                            </>
                                        ) : (
                                            <Button
                                                disabled={loadingButton}
                                                onClick={() => {
                                                    setLoadingButton(true)
                                                    followUser(id, setLoadingButton)
                                                }}>
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
