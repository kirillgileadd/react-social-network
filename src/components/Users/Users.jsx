import React, {useEffect} from 'react';
import {StyledPaper} from "../../UI/StyledPaper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {Button, Grid, InputBase, Pagination} from "@mui/material";
import UserItem from "./UserItem";
import {useDispatch, useSelector} from "react-redux";
import {
    changePageNumberAction, cleanUsersAction,
    fetchUsers,
    followAction, followSuccess,
    setUsersAction,
    unfollowAction, unfollowSuccess
} from "../../redux/actions/users";
import axios from "axios";
import Loading from "../../Loading";
import {useLocation} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


const Users = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(({users}) => users)
    const {users} = useSelector(({users}) => users)
    const {currentPage, pageSize, totalCount} = useSelector(({users}) => users)
    console.log(useLocation())

    let pageCount = Math.ceil(totalCount / pageSize)

    useEffect(() => {
        dispatch(fetchUsers(pageSize, currentPage))
        return function cleanUp() {
            dispatch(cleanUsersAction())
        }
    }, [currentPage])


    const followUser = (userId, setLoadingButton) => {
        dispatch(followSuccess(userId, setLoadingButton))
    }

    const unfollowUser = (userId, setLoadingButton) => {
        dispatch(unfollowSuccess(userId, setLoadingButton))
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
                                Invite new Users
                            </Button>
                        </Box>
                    </Box>
                    <StyledPaper sx={{borderRadius: 0, boxShadow: 0, mb: 0, p: 1}}>
                        <Box
                            component="form"
                            sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                        >
                            <IconButton sx={{p: '10px'}} aria-label="menu">
                                <SearchIcon/>
                            </IconButton>
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Search"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Box>
                    </StyledPaper>
                    <StyledPaper sx={{borderRadius: '0px 0px 5px 5px'}}>
                        <List sx={{width: '100%', padding: 0, height: '600px'}}>
                            {isLoading ?
                                users.map((user) => (
                                    <UserItem key={user.id} {...user} followUser={followUser}
                                              unfollowUser={unfollowUser}/>
                                )) : <Loading/>
                            }
                        </List>
                    </StyledPaper>
                    <Pagination sx={{pb: 2, display: 'flex', justifyContent: 'center'}} count={pageCount}
                                color="primary" onChange={handleChangePageNumber}
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