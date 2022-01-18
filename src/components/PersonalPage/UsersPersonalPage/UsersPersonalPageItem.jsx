import React from 'react';
import {Avatar, ListItem, ListItemText, Typography} from "@mui/material";
import {StyledLink} from "../../../UI/Links/StyledLink";
import {stringAvatar, stringToColor} from "../../../UI/UsersAvatar";


const UsersPersonalPageItem = ({name, photos}) => {
    return (
        <ListItem alignItems={'center'} sx={{
            cursor: 'pointer',
            m: 1,
            p: 0,
            width: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            {/*<Avatar sx={{width: 56, height: 56, objectFit: 'cover'}} alt="Remy Sharp" src={photoUrl}/>*/}
            <Avatar {...stringAvatar(name.toUpperCase())} sx={{height: 60, width: 60, bgcolor: stringToColor(name)}} src={photos.large}/>

            <ListItemText>
                <Typography color={'primary'} variant={'body2'} textAlign={'center'} noWrap sx={{width: "56px"}}>
                    <StyledLink to={`/user/${name}`} sx={{width: '100% !important'}}>
                        {name}
                    </StyledLink>
                </Typography>
            </ListItemText>
        </ListItem>
    );
};

export default UsersPersonalPageItem;