import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Grid} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";

const Layout = () => {
    const isAuth = useSelector(({auth}) => auth.authData.isAuth)
    const userId = useSelector(({auth}) => auth.id)
    const navItems = [
        {name: "Profile", icon: <AccountCircleOutlinedIcon/>, link: `/${userId}`, disabled: !isAuth && true},
        {name: 'Messages', icon: <ForumOutlinedIcon/>, link: '/messages', disabled: !isAuth && true},
        {name: 'Users', icon: <PeopleAltOutlinedIcon/>, link: '/users', disabled: false},
        {name: 'Music', icon: <LibraryMusicOutlinedIcon/>, link: '/music', disabled: false}
    ]

    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '65px'}}>
                <Header/>
                <Grid container sx={{maxWidth: '1050px', pt: 1}} spacing={2}>
                    <NavBar navItems={navItems}/>
                    <Grid item xs={10} sx={{mt: '8px'}}>
                        <Outlet/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
        ;
};

export default Layout;