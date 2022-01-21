import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import Avatar from "./PersonalInfo/Avatar/Avatar";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import UsersPersonalPage from "./UsersPersonalPage/UsersPersonalPage";
import PrettyBlock from "./PrettyBlock";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
    addLikeAction,
    addPostAction, fetchProfile,
    setProfileAction,
    setUserProfileLoadingAction
} from "../../redux/actions/personalPage";
import {cleanUsersAction, fetchUsers, setUsersAction} from "../../redux/actions/users";
import {useLocation, useParams} from 'react-router-dom';


const PersonalPage = () => {
    const dispatch = useDispatch()
    let { userId } = useParams();
    const profile = useSelector(({personalPage}) => personalPage.profile)
    const posts = useSelector(({personalPage}) => personalPage.posts)
    const isLoading = useSelector(({personalPage}) => personalPage.isLoading)

    useEffect(() => {
        dispatch(fetchProfile(userId))
    }, [userId])

    // useEffect(() => {
    //     dispatch(fetchUsers(6, 10))
    //     return function cleanUp() {
    //         dispatch(cleanUsersAction())
    //     }
    // }, [])


    const addPost = (post, setPostVale) => {
        if (post) {
            dispatch(addPostAction(post))
            setPostVale('')
        }
    }

    const addLike = (post) => {
        dispatch(addLikeAction(post))
    }

    return (
        isLoading &&
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Avatar {...profile}/>
                <PrettyBlock/>
                <UsersPersonalPage />
            </Grid>
            <Grid item xs={8}>
                <PersonalInfo {...profile}/>
                <Photos {...profile}/>
                <Posts photos={profile.photos}
                       fullname={profile.fullName}
                       posts={posts}
                       addPost={addPost}
                       addLike={addLike}/>
            </Grid>
        </Grid>
    );
};

export default PersonalPage;