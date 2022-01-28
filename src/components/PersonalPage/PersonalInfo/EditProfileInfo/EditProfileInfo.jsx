import React from 'react';
import {StyledPaper} from "../../../../UI/StyledPaper";
import Box from "@mui/material/Box";
import {Button, Grid} from "@mui/material";
import EditProfileInput from "./EditProfileInput";

const EditProfileInfo = () => {
    return (
        <Grid container spacing={2}>
            <Grid xs={8} item>
                <Box sx={{
                    typography: 'body1',
                    padding: '15px',
                    backgroundColor: 'grey.50',
                    borderRadius: '5px 5px 0px 0px',
                }}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        Main
                    </Box>
                </Box>
                <StyledPaper sx={{borderRadius: 0, boxShadow: 0, mb: 0, p: 1}}>
                    <Box sx={{p:3, pt: 1}}>
                        <EditProfileInput/>
                        <EditProfileInput/>
                        <EditProfileInput multiline={true}/>
                        <EditProfileInput/>
                    </Box>
                </StyledPaper>
                <Box sx={{
                    typography: 'body1',
                    padding: '15px',
                    backgroundColor: 'grey.50',
                    borderRadius: '0px 0px 5px 5px',
                }}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button variant={'contained'}>Save</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default EditProfileInfo;