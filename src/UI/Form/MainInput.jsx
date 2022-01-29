import React from 'react';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";

const MainInput = ({children, name}) => {
    return (
        <>
            <Grid item xs={4} >
                <Typography textAlign={'right'}>
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={8}>
                {children}
            </Grid>
        </>
    );
};

export default MainInput;