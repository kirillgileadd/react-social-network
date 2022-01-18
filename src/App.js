import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";

//NavBar
import NavBar from "./components/NavBar/NavBar";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import EditProfileInfo from "./components/PersonalPage/PersonalInfo/EditProfileInfo";
import Users from "./components/Users/Users";

const navItems = [
    {name: "Profile", icon: <AccountCircleOutlinedIcon />, link: '/2'},
    {name: 'Messages', icon: <ForumOutlinedIcon />, link: '/messages'},
    {name: 'Users', icon: <PeopleAltOutlinedIcon />, link: '/users'},
    {name: 'Music', icon: <LibraryMusicOutlinedIcon />, link: '/music'}
]


function App() {
    return (
        <div className="App">
            <Header/>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '65px'}}>
                <Grid container sx={{maxWidth: '1050px', pt: 1}} spacing={2}>
                    <NavBar navItems={navItems}/>
                    <Grid item xs={10} sx={{mt: '8px'}}>
                        <Routes>
                            <Route path={'/:id'} element={<PersonalPage/>}/>
                            <Route path={'/messages'} element={<Messages/>}/>
                            <Route path={'/edit'} element={<EditProfileInfo/>}/>
                            <Route path={'/users'} element={<Users/>}/>
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default App;
