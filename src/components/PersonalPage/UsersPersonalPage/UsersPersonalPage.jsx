import React, {useEffect, useState} from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import List from "@mui/material/List";
import UsersPersonalPageItem from "./UsersPersonalPageItem";
import {cleanUsersAction, fetchUsers, setUsersAction} from "../../../redux/actions/users";
import {useDispatch} from "react-redux";
import axios from "axios";
import {usersAPI} from "../../../api/api";

const UsersPersonalPage = () => {
    const [profileUsers, setProfileUsers] = useState([])

    useEffect(() => {
        usersAPI.getUsers(6, 1, '').then(response => {
            setProfileUsers(response.data.items)
        })
    }, [])

    return (
        <StyledPaper sx={{display: {xs: 'none', md: 'block'}}}>
            <List sx={{width: '100%', height: '220px', p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    profileUsers.map((user) => <UsersPersonalPageItem key={user.id} {...user}/>)
                }
            </List>
        </StyledPaper>
    );
};

export default UsersPersonalPage;