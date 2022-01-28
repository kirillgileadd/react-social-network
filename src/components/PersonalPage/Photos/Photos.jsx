import React, {useEffect, useState} from 'react';
import {ImageList, ImageListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {StyledPaper} from "../../../UI/StyledPaper";
import noPhotos from '../../../images/noPhoto.svg'


const Photos = ({photos}) => {
    const [photosGallery, setPhotosGallery] = useState([])

    useEffect(() => {
        setPhotosGallery(prev =>  !photos ? [photos.large] : [photos.large, ...prev])
    }, [photos])

    return (
        <StyledPaper >
            <Box sx={{display: 'flex'}}>
                <Typography variant={'subtitle1'} sx={{mr: 1, mb: 1}}>
                   Photos
                </Typography>
            </Box>
            <ImageList sx={{ maxWidth: 540, m: 0, flexWrap: 'wrap'}} cols={4} rowHeight={135}>
                {photosGallery.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            src={`${item || noPhotos}?w=135&h=135&fit=crop&auto=format`}
                            srcSet={`${item}?w=135&h=135&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </StyledPaper>
    );
};

export default Photos;