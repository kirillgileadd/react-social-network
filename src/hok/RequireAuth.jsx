import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
    const isAuth = useSelector(({auth}) => auth.authData.isAuth)

    if(!isAuth) {
        return <Navigate to={'/login'}/>
    }

    return children
};

export default RequireAuth;