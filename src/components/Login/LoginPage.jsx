import React from 'react';
import {Button, Grid} from "@mui/material";
import loginBG from '../../images/loginBG.jpg'
import loginLogo from '../../images/loginLogo.svg'
import logo from '../../images/logo1.svg'
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {StyledLink} from "../../UI/Links/StyledLink";


export const StyledLogo = styled('img')(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '50%',

    height: '50%'
}));

const LoginPage = () => {
    return (
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={7} sx={{height: '100%', position: 'relative'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={loginBG} alt=""/>
                <StyledLogo src={loginLogo} alt=""/>
            </Grid>
            <Grid item xs={5} sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Box sx={{p: 5,}}>
                    <img src={logo} alt=""/>
                    <Typography sx={{mt: 4}} variant={'h2'} fontWeight={'bolder'}>
                        React dev social network
                    </Typography>
                    <Box sx={{
                        '& .MuiButton-root': {
                            width: '300px',
                            margin: '16px 0px',
                            display: 'block'
                        }
                    }}>
                        <StyledLink to={'/login'}>
                            <Button variant={'outlined'}>
                                Sign In
                            </Button>
                        </StyledLink>
                        <Button variant={'contained'}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Grid>

        </Grid>
    );
};

export default LoginPage;