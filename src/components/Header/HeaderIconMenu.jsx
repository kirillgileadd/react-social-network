import React, {useEffect, useState} from 'react';
import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import noAvatarSmall from '../../images/noAvatarSmall.svg'
import Box from "@mui/material/Box";
import {profileAPI} from "../../api/api";

const HeaderIconMenu = ({logout, profile, ownerName, ownerId}) => {
    const settings = ['Logout'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [ownerPhoto, setOwnerPhoto] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        profileAPI.getProfile(ownerId).then((responce) => {
            console.log(responce.data.photos.small)
            setOwnerPhoto(responce.data.photos.small)
        })
    }, [profile])

    return (
        <div>
            <Box display={'flex'} alignItems={'center'}>
                <Typography sx={{mr: 1, fontWeight: 'bold'}}>{ownerName || ''}</Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0, border: '1px solid #fff'}}>
                        <Avatar alt="Remy Sharp" src={ownerPhoto || noAvatarSmall}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                sx={{mt: '45px'}}
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
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" onClick={logout}>{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default HeaderIconMenu;