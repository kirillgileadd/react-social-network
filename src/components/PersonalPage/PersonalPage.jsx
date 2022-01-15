import React from 'react';
import {Grid} from "@mui/material";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import Avatar from "./PersonalInfo/Avatar/Avatar";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import UsersPersonalPage from "./UsersPersonalPage/UsersPersonalPage";
import PrettyBlock from "./PrettyBlock";

const PersonalPage = () => {
    return (
            <Grid container spacing={2}>
                <Grid  item xs={4}>
                    <Avatar/>
                    <PrettyBlock/>
                    <UsersPersonalPage/>
                </Grid>
                <Grid  item xs={8}>
                    <PersonalInfo/>
                    <Photos/>
                    <Posts/>
                </Grid>
            </Grid>
    );
};

export default PersonalPage;