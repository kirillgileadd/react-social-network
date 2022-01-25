import React from 'react';
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

const Loading = () => {
    return (
        <Box sx={{ display: 'flex', height: "100%", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    );
};

export default Loading;