import React from 'react';
import Box from "@mui/material/Box";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Messages from "./components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import EditProfileInfo from "./components/PersonalPage/PersonalInfo/EditProfileInfo";
import Users from "./components/Users/Users";
import Layout from "./Layout";
import Music from "./components/Music/Music";


function App() {
    return (
        <div className="App">
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '65px'}}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route path={'/:userId'} element={<PersonalPage />}/>
                        <Route path={'/messages'} element={<Messages/>}/>
                        <Route path={'/edit'} element={<EditProfileInfo/>}/>
                        <Route path={'/users'} element={<Users />}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Route>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
