import React, {useEffect, useState} from 'react';
import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import noAvatarSmall from '../../images/noAvatarSmall.svg'
import Box from "@mui/material/Box";
import {profileAPI} from "../../api/api";
import {setOwnerPhoto} from "../../redux/actions/personalPage";

const HeaderIconMenu = ({logout, profile, ownerName, ownerPhoto, isAuth}) => {
    const settings = ['Logout'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <Box display={'flex'} alignItems={'center'}>
                <Typography sx={{mr: 1, fontWeight: 'bold'}}>{ownerName || ''}</Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0, border: '1px solid #fff'}}>
                        <Avatar alt="Remy Sharp" src={isAuth && ownerPhoto || noAvatarSmall}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                sx={{mt: '45px', '& .MuiList-root ': {p: 0}}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={logout}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default HeaderIconMenu;