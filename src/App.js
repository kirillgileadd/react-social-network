import React from 'react';
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Messages from "./components/Messages/Messages";
import {Navigate, Route, Routes} from "react-router-dom";
import EditProfileInfo from "./components/PersonalPage/PersonalInfo/EditProfileInfo";
import Users from "./components/Users/Users";
import Layout from "./Layout";
import Music from "./components/Music/Music";
import Login from "./components/Login/Login";
import RequireAuth from "./hok/RequireAuth";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to="/2" replace/>}/>
                    <Route path={'/:userId'} element={
                        <RequireAuth>
                            <PersonalPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'/messages'} element={
                        <RequireAuth>
                            <Messages/>
                        </RequireAuth>}/>
                    <Route path={'/edit'} element={<EditProfileInfo/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                </Route>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;
