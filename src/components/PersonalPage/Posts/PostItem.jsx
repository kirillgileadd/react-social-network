import React from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {LikesButton} from "../../../UI/LiskesButton";
import noAvatarSmall from '../../../images/noAvatarSmall.svg'


const PostItem = ({id, value, likes, addLike, registeredAt, photos, fullname}) => {

    const newLikesCount = () => {
        let post = {
            id: id,
            likes,
        }
        addLike(post)
    }

    return (
        <StyledPaper>
            <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 2}}>
                <ListItem alignItems="center" sx={{m: 0, p: 0}}>
                    <ListItemAvatar sx={{marginRight: 1}}>
                        <Avatar sx={{height: 56, width: 56}} alt="Cindy Baker" src={photos.small ?? noAvatarSmall}/>
                    </ListItemAvatar>
                    <ListItemText sx={{mt: 0}}>
                        <Typography color={'primary'}>
                            {fullname.split(' ')[0]}
                        </Typography>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.secondary"
                        >
                            {registeredAt}
                        </Typography>
                    </ListItemText>
                </ListItem>
                <IconButton>
                    <MoreHorizIcon color={'primary'}/>
                </IconButton>
            </Box>
            <Box sx={{mb: 1}}>
                <Typography>
                    {value}
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <LikesButton
                    onClick={newLikesCount}
                    value='select'
                    selected={likes.isLiked}
                >
                    <FavoriteBorderIcon sx={{mr: 1}}/>
                    {likes.likesCount}
                </LikesButton>
            </Box>
        </StyledPaper>
    )
        ;
};

export default PostItem;