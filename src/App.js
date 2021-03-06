import React, {useEffect} from 'react';
import PersonalPage from "./components/PersonalPage/PersonalPage";
import Messages from "./components/Messages/Messages";
import {Navigate, Route, Routes} from "react-router-dom";
import EditProfileInfo from "./components/PersonalPage/PersonalInfo/EditProfileInfo/EditProfileInfo";
import Users from "./components/Users/Users";
import Layout from "./Layout";
import Music from "./components/Music/Music";
import LoginPage from "./components/Login/LoginPage";
import RequireAuth from "./hok/RequireAuth";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {authUser, initialize} from "./redux/actions/auth";


function App() {
    const dispatch = useDispatch()
    const userId = useSelector(({auth}) => auth.id)
    const {profile} = useSelector(({personalPage}) => personalPage)
    const init = useSelector(({app}) => app.initialize)

    useEffect(() => {
        dispatch(authUser()) // санка с запросом
    }, [])

    useEffect(() => {
        dispatch(initialize())
    }, [])

    return (
        init &&
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={`/${userId}`} replace/>}/>
                    <Route path={'/:userId'} element={
                        <RequireAuth>
                            <PersonalPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'/messages'} element={
                        <RequireAuth>
                            <Messages/>
                        </RequireAuth>}/>
                    <Route path={'/edit'} element={
                        <RequireAuth>
                            <EditProfileInfo userId={userId}/>
                        </RequireAuth>
                    }/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>
                <Route path={'/loginPage'} element={<LoginPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
