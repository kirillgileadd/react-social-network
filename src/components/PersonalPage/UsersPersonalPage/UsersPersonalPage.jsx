import React, {useEffect} from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import List from "@mui/material/List";
import UsersPersonalPageItem from "./UsersPersonalPageItem";

const UsersPersonalPage = ({users}) => {

    return (
        <StyledPaper>
            <List sx={{width: '100%', height: '220px', p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    users.map((user) => <UsersPersonalPageItem key={user.id} {...user}/>)
                }
            </List>
        </StyledPaper>
    );
};

export default UsersPersonalPage;