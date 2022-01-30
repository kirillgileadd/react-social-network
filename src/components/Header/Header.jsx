import React, {useEffect} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../images/finalLogo.svg'
import {logout} from "../../redux/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {StyledLink} from "../../UI/Links/StyledLink";
import HeaderIconMenu from "./HeaderIconMenu";
import {setOwnerPhoto} from "../../redux/actions/personalPage";


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
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '218px',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(({auth}) => auth.authData.isAuth)
    const ownerId = useSelector(({auth}) => auth.id)
    const login = useSelector(({auth}) => auth.login)
    const profile = useSelector(({personalPage}) => personalPage.profile)
    const {ownerPhoto} = useSelector(({personalPage}) => personalPage)

    const currentUser = profile && profile.id === ownerId

    useEffect(() => {
        dispatch(setOwnerPhoto(ownerId))
    }, [profile])

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
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
                        <StyledLink sx={{display: 'flex', alignItems: 'center', width: 'auto'}}
                                    to={!isAuth ? '/loginPage' : `/${ownerId}`}>
                            <Box sx={{mr: 1}}>
                                <img style={{width: "40px"}} src={logo} alt=""/>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{display: {xs: 'none', sm: 'block'}}}
                            >
                                GileadSocial
                            </Typography>
                        </StyledLink>
                        <Search sx={{display: {xs: 'none', sm: 'block'}}}>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Box>
                    <Box>
                        {
                            isAuth ? (
                                    <HeaderIconMenu logout={logoutUser} ownerPhoto={ownerPhoto} isAuth={isAuth}
                                                    ownerName={login} currentUser={currentUser}/>
                                )
                                : (
                                    <StyledLink to={'/login'}>
                                        <Typography>
                                            Login
                                        </Typography>
                                    </StyledLink>
                                )
                        }
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;