import React from 'react';
import {Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const EditProfileInput = ({multiline}) => {
    return (
        <Box sx={{mb: 2}}>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={3} >
                    <Typography textAlign={'right'}>title:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField multiline={multiline}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EditProfileInput;