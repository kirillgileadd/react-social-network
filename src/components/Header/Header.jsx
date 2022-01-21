import React, {useEffect} from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Icon} from "@mui/material";
import avatar from '../../images/img.jpg'
import logo from '../../images/logo1.svg'
import axios from "axios";
import {setAuthUserDataAction} from "../../redux/actions/auth";
import {useDispatch} from "react-redux";
import {usersAPI} from "../../api/api";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '145px',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

const Header = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        usersAPI.auth().then(response => {
            if(response.data.resultCode === 0 ) {
                dispatch(setAuthUserDataAction(response.data.data))
            }
        })
    }, [])

    return (
        <div>
            <Box>
                <AppBar position='fixed' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Toolbar sx={{
                        width: "100%",
                        maxWidth: "1050px",
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            width: "100%",
                            padding: '0 15px',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Box sx={{display: "flex", alignItems: "center",}}>
                                <Box sx={{mr: '15px'}}>
                                    <img src={logo} alt=""/>
                                </Box>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{display: {xs: 'none', sm: 'block'}, marginRight: 2}}
                                >
                                    GileadSocial
                                </Typography>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{'aria-label': 'search'}}
                                    />
                                </Search>
                            </Box>
                            <Avatar alt="Remy Sharp" src={avatar}/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;