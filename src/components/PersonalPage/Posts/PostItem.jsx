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
import avatar from '../../../images/img.jpg'
import {Button} from "@mui/material";
import {LiskesButton} from "../../../UI/LiskesButton";
import {useDispatch} from "react-redux";
import {addLikeAction} from "../../../redux/actions/post";

const PostItem = ({id, value, likesCount, addLike, registeredAt}) => {


    return (
        <StyledPaper>
            <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
                <ListItem alignItems="flex-start" sx={{m: 0, p: 0}}>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={avatar}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Kirill"
                        secondary={
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.secondary"
                            >
                                {registeredAt}
                            </Typography>
                        }
                    />
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
                <LiskesButton onClick={() => addLike(id)}>
                    <FavoriteBorderIcon sx={{mr: 1}} />
                    <Typography>
                        {likesCount}
                    </Typography>
                </LiskesButton>
            </Box>
        </StyledPaper>
    );
};

export default PostItem;