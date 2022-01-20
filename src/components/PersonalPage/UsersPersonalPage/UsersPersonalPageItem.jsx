import React from 'react';
import {Avatar, ListItem, ListItemText, Typography} from "@mui/material";
import {StyledLink} from "../../../UI/Links/StyledLink";
import {stringAvatar, stringToColor} from "../../../UI/UsersAvatar";
import {Link} from "react-router-dom";


const UsersPersonalPageItem = ({name, photos, id}) => {
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
            <StyledLink to={`/${id}`}>
                <Avatar {...stringAvatar(name.toUpperCase())} sx={{height: 60, width: 60, bgcolor: stringToColor(name)}}
                        src={photos.large}/>

                <ListItemText>
                    <Typography color={'primary'} variant={'body2'} textAlign={'center'} noWrap sx={{width: "56px"}}>
                        {name}
                    </Typography>
                </ListItemText>
            </StyledLink>
        </ListItem>
    );
};

export default UsersPersonalPageItem;