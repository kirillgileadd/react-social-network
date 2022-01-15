import React from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import Box from "@mui/material/Box";
import styles from "../PersonalPage.module.css";
import {Button, Divider, Typography} from "@mui/material";

const PersonalInfo = () => {
    return (
        <StyledPaper >
            <Box className={styles.info__box} sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box >
                    <Typography variant={'h6'}>
                        Kirill Gilead
                    </Typography>
                    <Typography variant={'body2'}>
                        Change status
                    </Typography>
                </Box>
                online
            </Box>
            <Divider className={styles.info__divider}/>
            <Box >
                <Typography>Info</Typography>
                <Button fullWidth><Typography sx={{textTransform: 'none'}}>Show detail information</Typography></Button>
            </Box>
        </StyledPaper>
    );
};

export default PersonalInfo;