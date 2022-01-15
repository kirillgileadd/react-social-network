import React from 'react';
import {Avatar, ListItem, ListItemText, Typography} from "@mui/material";
import {StyledLink} from "../../../UI/Links/StyledLink";

const UsersPersonalPageItem = ({name, avatarSrc}) => {
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
            <Avatar sx={{width: 56, height: 56, objectFit: 'cover'}} alt="Remy Sharp" src={avatarSrc}/>
            <ListItemText>
                <Typography color={'primary'} variant={'body2'}>
                    <StyledLink to={`/user/${name}`}>
                        {name}
                    </StyledLink>
                </Typography>
            </ListItemText>
        </ListItem>
    );
};

export default UsersPersonalPageItem;