import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import Avatar from "./PersonalInfo/Avatar/Avatar";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import UsersPersonalPage from "./UsersPersonalPage/UsersPersonalPage";
import PrettyBlock from "./PrettyBlock";
import {useDispatch, useSelector} from "react-redux";
import {addLikeAction, addPostAction, fetchProfile, getStatus, onSavePhoto} from "../../redux/actions/personalPage";
import {useParams} from 'react-router-dom';


const PersonalPage = () => {
    const dispatch = useDispatch()
    let { userId } = useParams()
    const profile = useSelector(({personalPage}) => personalPage.profile)
    const posts = useSelector(({personalPage}) => personalPage.posts)
    const {ownerPhoto} = useSelector(({personalPage}) => personalPage)
    const isLoading = useSelector(({personalPage}) => personalPage.isLoading)
    const id = useSelector(({auth}) => auth.id)

    let currentUser = userId === String(id)

    useEffect(() => {
        dispatch(fetchProfile(userId))
        dispatch(getStatus(userId))
    }, [userId])

    const addPost = (post, setPostVale) => {
        if (post) {
            dispatch(addPostAction(post))
            setPostVale('')
        }
    }

    const addLike = (post) => {
        dispatch(addLikeAction(post))
    }

    const savePhoto = (photo) => {
        dispatch(onSavePhoto(photo))
    }


    return (
        isLoading && profile &&
        <Grid container spacing={2}>
            <Grid item xs={0} md={4}>
                <Avatar {...profile} currentUser={currentUser} savePhoto={savePhoto} />
                <PrettyBlock/>
                <UsersPersonalPage />
            </Grid>
            <Grid item xs={12} md={8}>
                <PersonalInfo {...profile} currentUser={currentUser} />
                <Photos {...profile}/>
                <Posts photos={profile.photos}
                       ownerPhoto={ownerPhoto}
                       fullname={profile.fullName}
                       posts={posts}
                       addPost={addPost}
                       addLike={addLike}/>
            </Grid>
        </Grid>
    );
};

export default PersonalPage;