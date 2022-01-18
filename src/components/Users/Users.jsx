import React, {useEffect} from 'react';
import {StyledPaper} from "../../UI/StyledPaper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {Button, Grid, Pagination} from "@mui/material";
import UserItem from "./UserItem";
import {useDispatch, useSelector} from "react-redux";
import {
    changePageNumberAction,
    fetchUsers,
    followAction,
    setUsersAction,
    unfollowAction
} from "../../redux/actions/users";
import axios from "axios";
import Loading from "./Loading";


const Users = () => {
    const dispatch = useDispatch()
    const {users} = useSelector(({users}) => users)
    const {currentPage, pageSize, totalCount} = useSelector(({users}) => users)
    const {isLoading} = useSelector(({users}) => users)

    let pageCount = Math.ceil(totalCount / pageSize)

    useEffect(() => {
        dispatch(fetchUsers(pageSize, currentPage))
    }, [currentPage])


    const followUser = (userId) => {
        dispatch(followAction(userId))
    }

    const unfollowUser = (userId) => {
        dispatch(unfollowAction(userId))
    }

    const handleChangePageNumber = (event, value) => {
        dispatch(changePageNumberAction(value))
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                        <Box sx={{
                            typography: 'body1',
                            padding: '15px',
                            backgroundColor: 'grey.50',
                            borderRadius: '5px 5px 0px 0px'
                        }}>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                Tabs
                                <Button sx={{boxShadow: "0", '&:hover': {boxShadow: '0'}}} variant={'contained'}>
                                    Follow User
                                </Button>
                            </Box>
                        </Box>
                        <StyledPaper sx={{borderRadius: '0px 0px 5px 5px'}}>
                            <List sx={{width: '100%', padding: 0, height: '600px'}}>
                                { isLoading ?
                                    users.map((user) => (
                                        <UserItem key={user.id} {...user} followUser={followUser}
                                                  unfollowUser={unfollowUser}/>
                                    )) : <Loading/>
                                }
                            </List>
                        </StyledPaper>
                        <Pagination sx={{pb: 2, display: 'flex', justifyContent:'center'}} count={pageCount} color="primary" onChange={handleChangePageNumber}
                                    page={currentPage}/>
                </Grid>
                <Grid item xs={4}>
                    <StyledPaper>
                        Content!
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Users;