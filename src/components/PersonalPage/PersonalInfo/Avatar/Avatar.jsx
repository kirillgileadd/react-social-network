import React, {useEffect, useState} from 'react';
import {StyledPaper} from "../../../../UI/StyledPaper";
import {Button, List, ListItem} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UploadIcon from '@mui/icons-material/Upload';
import {StyledLink} from "../../../../UI/Links/StyledLink";
import noAvatarLarge from '../../../../images/noAvatarLarge.svg'
import {followSuccess, unfollowSuccess} from "../../../../redux/actions/users";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {profileAPI} from "../../../../api/api";


export const AvatarBox = styled(Box)(({theme}) => ({
    height: "300px",
    marginBottom: '8px',
    position: "relative",
    overflow: 'hidden',
    '&:hover div ': {
        bottom: '0px'
    }
}));

export const AvatarOptions = styled('div')(({theme}) => ({
    position: 'absolute',
    bottom: "-100px",
    left: 0,
    width: '100%',
    height: '20px',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: 'all 0.3s',
    padding: "10px"
}));


const Avatar = ({photos, currentUser, savePhoto}) => {
    const dispatch = useDispatch()
    let {userId} = useParams()
    const [loadingButton, setLoadingButton] = useState(false)
    const [followed, setFollowed] = useState(null)

    useEffect(() => {
        profileAPI.isFollow(userId).then((response) => {
            setFollowed(response.data)
        })
    }, [])

    const followUser = (userId, setLoadingButton, setFollowed) => {
        dispatch(followSuccess(userId, setLoadingButton ,setFollowed))
    }

    const unfollowUser = (userId, setLoadingButton, setFollowed) => {
        dispatch(unfollowSuccess(userId, setLoadingButton, setFollowed))
    }

    const onPutPhoto = (e) => {
        if(e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <StyledPaper>
            <AvatarBox>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photos.large ?? noAvatarLarge}
                     alt=""/>
                {
                    currentUser ? <AvatarOptions>
                        <List sx={{p: 0, m: 0}}>
                            <ListItem sx={{
                                p: 0, m: 0,
                                display: 'flex',
                                alignItems: 'center',
                                color: '#fff',
                                opacity: "0.7",
                                '&:hover': {opacity: 1},
                            }}>
                                <UploadIcon/>
                                <Typography sx={{ml: "5px"}}>
                                    <label>
                                        Change Photo
                                        <input style={{display: 'none'}} type={'file'} onChange={onPutPhoto}/>
                                    </label>
                                </Typography>
                            </ListItem>
                        </List>
                    </AvatarOptions> : <></>
                }

            </AvatarBox>
            {
                currentUser ? <Button variant={'contained'} fullWidth>
                    <StyledLink to={'/edit'}>
                        Edit
                    </StyledLink>
                </Button> : <>
                    <Button
                        sx={{mb: 1}}
                        variant={'contained'}
                        fullWidth
                    >
                        White a message
                    </Button>
                    {
                        followed ? <Button
                            variant={'outlined'}
                            fullWidth
                            disabled={loadingButton}
                            onClick={() => {
                                setLoadingButton(true)
                                unfollowUser(userId, setLoadingButton, setFollowed)
                            }}
                        >
                            Unfollow
                        </Button> : <Button
                            variant={'outlined'}
                            fullWidth
                            disabled={loadingButton}
                            onClick={() => {
                                setLoadingButton(true)
                                followUser(userId, setLoadingButton, setFollowed)

                            }}
                        >
                            Follow
                        </Button>
                    }
                </>
            }
        </StyledPaper>
    );
};

export default Avatar;