import React from 'react';
import Box from "@mui/material/Box";
import {Button, Input, InputBase, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const Login = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch', display: 'block' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>
                Login
            </Typography>
            <TextField id="outlined-basic" label="Login" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant={'contained'}>
                Login
            </Button>
        </Box>
    );
};

export default Login;