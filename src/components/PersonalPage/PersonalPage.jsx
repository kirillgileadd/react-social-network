import React from 'react';
import {Button, Divider, Grid, Paper, Typography} from "@mui/material";
import styles from "./PersonalPage.module.css";
import avatar from '../../images/img.jpg'
import Box from "@mui/material/Box";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import {StyledPaper} from "../../UI/StyledPaper";

const PersonalPage = () => {
    return (
            <Grid container spacing={2}>
                <Grid  item xs={4}>
                    <StyledPaper>
                        <img className={styles.avatar__img} src={avatar} alt=""/>
                        <Button variant={'contained'} fullWidth>Edit</Button>
                    </StyledPaper>
                </Grid>
                <Grid  item xs={8}>
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
                    <Photos/>
                    <Posts/>
                </Grid>
            </Grid>
    );
};

export default PersonalPage;