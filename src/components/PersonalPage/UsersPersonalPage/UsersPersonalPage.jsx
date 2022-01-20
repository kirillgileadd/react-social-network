import React, {useEffect, useState} from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import List from "@mui/material/List";
import UsersPersonalPageItem from "./UsersPersonalPageItem";
import {cleanUsersAction, fetchUsers, setUsersAction} from "../../../redux/actions/users";
import {useDispatch} from "react-redux";
import axios from "axios";

const UsersPersonalPage = () => {
    const [profileUsers, setProfileUsers] = useState([])

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=6`).then(response => {
            setProfileUsers(response.data.items)
        })
    }, [])

    return (
        <StyledPaper>
            <List sx={{width: '100%', height: '220px', p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    profileUsers.map((user) => <UsersPersonalPageItem key={user.id} {...user}/>)
                }
            </List>
        </StyledPaper>
    );
};

export default UsersPersonalPage;