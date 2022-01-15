import React from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import List from "@mui/material/List";
import UsersPersonalPageItem from "./UsersPersonalPageItem";

const users = [
    {
        id: 1,
        name: 'Diana',
        avatarSrc: 'https://sun9-80.userapi.com/impf/c852036/v852036252/327dd/KvHg74I9ayI.jpg?size=704x528&quality=96&sign=6ec3c1ba03c468b1a0a95398dc68365b&type=album',
    },
    {
        id: 2,
        name: 'Ren',
        avatarSrc: 'https://sun9-29.userapi.com/impf/c850020/v850020885/1152ae/urQxPvBN-vk.jpg?size=2560x1707&quality=96&sign=73a86bb9a6d97f614e561b151836073a&type=album',
    },
    {
        id: 3,
        name: 'Sasha',
        avatarSrc: 'https://sun9-80.userapi.com/impf/c852036/v852036252/327dd/KvHg74I9ayI.jpg?size=704x528&quality=96&sign=6ec3c1ba03c468b1a0a95398dc68365b&type=album',
    },
    {
        id: 4,
        name: 'Dmitry',
        avatarSrc: 'https://sun9-80.userapi.com/impf/c852036/v852036252/327dd/KvHg74I9ayI.jpg?size=704x528&quality=96&sign=6ec3c1ba03c468b1a0a95398dc68365b&type=album',
    },
    {
        id: 5,
        name: 'Diana',
        avatarSrc: 'https://sun9-80.userapi.com/impf/c852036/v852036252/327dd/KvHg74I9ayI.jpg?size=704x528&quality=96&sign=6ec3c1ba03c468b1a0a95398dc68365b&type=album',
    },
    {
        id: 6,
        name: 'Diana',
        avatarSrc: 'https://sun9-80.userapi.com/impf/c852036/v852036252/327dd/KvHg74I9ayI.jpg?size=704x528&quality=96&sign=6ec3c1ba03c468b1a0a95398dc68365b&type=album',
    },
]

const UsersPersonalPage = () => {
    return (
        <StyledPaper>
            <List sx={{width: '100%', p: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {
                    users.map((user) => <UsersPersonalPageItem key={user.id} {...user}/>)
                }
            </List>
        </StyledPaper>
    );
};

export default UsersPersonalPage;