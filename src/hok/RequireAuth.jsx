import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import Loading from "../components/Users/Loading";

const RequireAuth = ({children}) => {

    const isAuth = useSelector(({auth}) => auth.authData.isAuth)
    const AuthLoaded = useSelector(({auth}) => auth.authData.AuthLoaded)
    console.log(isAuth)

    if (!isAuth && !AuthLoaded) {
        return <Loading/>
    }
    else if(!isAuth && AuthLoaded) {
        return <Navigate to={'/login'}/>
    }

    return children
};

export default RequireAuth;