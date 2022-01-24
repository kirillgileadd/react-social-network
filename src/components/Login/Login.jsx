import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/auth";
import {Navigate} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(({auth}) => auth.authData.isAuth)
    const authLoaded = useSelector(({auth}) => auth.authData.AuthLoaded)
    const onSubmit = ({email, password, rememberMe}) => {
        dispatch(login(email, password, rememberMe))
    }

    if (authLoaded && isAuth) {
        return <Navigate to={'/21925'}/>
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch', display: 'block'},
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                Login
            </Typography>
            <LoginForm onSubmit={onSubmit}/>
        </Box>
    );
};

export default Login;