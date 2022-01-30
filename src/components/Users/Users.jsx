import React, {useEffect, useState} from 'react';
import {StyledPaper} from "../../UI/StyledPaper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {Grid, InputBase, Pagination} from "@mui/material";
import UserItem from "./UserItem";
import {useDispatch, useSelector} from "react-redux";
import {
    changePageNumberAction,
    cleanUsersAction,
    fetchUsers,
    followSuccess,
    searchUsers,
    unfollowSuccess
} from "../../redux/actions/users";
import Loading from "../../Loading";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../../hooks/useDebounce";
import CloseIcon from '@mui/icons-material/Close';
import InviteNewUsers from "./InviteNewUsers";
import {styled} from "@mui/material/styles";


export const StyledPagination = styled(Pagination)(({theme}) => ({
    paddingBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        paddingBottom: '8px',
        '& .MuiPagination-ul': {
            '& li': {
                width: '35px',
                '& .MuiButtonBase-root': {
                    fontSize: '11px'
                }
            }
        }
    },
}));

const Users = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector(({users}) => users)
    const {users} = useSelector(({users}) => users)
    const {currentPage, pageSize, totalCount} = useSelector(({users}) => users)
    const [searchValue, setSearchValue] = useState('')

    const debouncedSearchTerm = useDebounce(searchValue, 500);
    let pageCount = Math.ceil(totalCount / pageSize)

    useEffect(() => {
        dispatch(fetchUsers(pageSize, currentPage))
        return function cleanUp() {
            dispatch(cleanUsersAction())
        }
    }, [])

    useEffect(() => {
        dispatch(searchUsers(pageSize, currentPage, debouncedSearchTerm))
    }, [debouncedSearchTerm, currentPage])

    const followUser = (userId, setLoadingButton) => {
        dispatch(followSuccess(userId, setLoadingButton))
    }

    const unfollowUser = (userId, setLoadingButton) => {
        dispatch(unfollowSuccess(userId, setLoadingButton))
    }

    const handleChangePageNumber = (event, value) => {
        dispatch(changePageNumberAction(value))
    }

    const handleChangeInputValue = (e) => {
        let {value} = e.target
        setSearchValue(value)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <StyledPaper sx={{
                    typography: 'body1',
                    padding: '15px',
                    backgroundColor: 'grey.50',
                    borderRadius: '5px 5px 0px 0px',
                    marginBottom: '0px !important'
                }}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        Users
                        <InviteNewUsers/>
                    </Box>
                </StyledPaper>
                <StyledPaper sx={{borderRadius: 0, boxShadow: 0,  marginBottom: '0px !important', p: 1}}>
                    <Box
                        component="form"
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
                    >
                        <IconButton sx={{p: '10px'}} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            value={searchValue}
                            onChange={handleChangeInputValue}
                            sx={{ml: 1, flex: 1}}
                            placeholder="Search"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <IconButton>
                            <CloseIcon onClick={() => {
                                setSearchValue('')
                            }}/>
                        </IconButton>
                    </Box>
                </StyledPaper>
                <StyledPaper sx={{borderRadius: '0px 0px 5px 5px'}}>
                    <List sx={{padding: 0, minHeight: '600px'}}>
                        {isLoading ?
                            users.map((user) => (
                                <UserItem key={user.id} {...user} followUser={followUser}
                                          unfollowUser={unfollowUser}/>
                            )) : <Loading/>
                        }
                    </List>
                </StyledPaper>
                <StyledPagination count={pageCount}
                            color="primary" onChange={handleChangePageNumber}
                            page={currentPage}/>
            </Grid>
            <Grid item xs={0} md={4} sx={{display: {xs: 'none', md: 'block'}}}>
                <StyledPaper>
                    Content!
                </StyledPaper>
            </Grid>
        </Grid>
    );
};

export default Users;