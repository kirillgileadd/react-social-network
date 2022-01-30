import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/auth";
import {Navigate} from 'react-router-dom'
import {StyledPaper} from "../../UI/StyledPaper";

const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(({auth}) => auth.authData.isAuth)
    const userId = useSelector(({auth}) => auth.id)
    const onSubmit = ({email, password, rememberMe}) => {
        dispatch(login(email, password, rememberMe))
    }

    if (isAuth) {
        return <Navigate to={`/${userId}`}/>
    }

    return (
        <StyledPaper
            sx={{
                height: {xs: 'calc(100vh - 180px)', md: 'calc(100vh - 120px)'},
                display: 'flex',
                justifyContent: {xs: 'center', md: 'flex-start'}
            }}
        >
            <Box
                sx={{
                    '& > :not(style)': {m: 1, width: '23ch', display: 'block'},
                }}
            >
                <Typography variant={'h6'}>
                    Login in
                </Typography>
                <LoginForm onSubmit={onSubmit}/>
            </Box>
        </StyledPaper>
    );
};

export default Login;