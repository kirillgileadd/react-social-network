import React from 'react';
import {StyledPaper} from "../../../../UI/StyledPaper";
import {Button, List, ListItem} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UploadIcon from '@mui/icons-material/Upload';
import {StyledLink} from "../../../../UI/Links/StyledLink";
import noAvatarLarge from '../../../../images/noAvatarLarge.svg'


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


const Avatar = ({photos}) => {
    return (
        <StyledPaper>
            <AvatarBox>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={photos.large ?? noAvatarLarge} alt=""/>
                <AvatarOptions>
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
                            <Typography sx={{ml: "5px"}}>Change Photo</Typography>
                        </ListItem>
                    </List>
                </AvatarOptions>
            </AvatarBox>
            <Button variant={'contained'} fullWidth>
                <StyledLink to={'/edit'}>
                    Edit
                </StyledLink>
            </Button>
        </StyledPaper>
    );
};

export default Avatar;