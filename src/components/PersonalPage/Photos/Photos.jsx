import React from 'react';
import {ImageList, ImageListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {StyledPaper} from "../../../UI/StyledPaper";
import noPhotos from '../../../images/noPhoto.svg'

const itemData = [
    {
        img: noPhotos,
        title: 'Breakfast',
    },
    {
        img: noPhotos,
        title: 'Burger',
    },
    {
        img: noPhotos,
        title: 'Camera',
    },
    {
        img: noPhotos,
        title: 'Camera',
    },
]

const Photos = ({photos}) => {
    return (
        <StyledPaper >
            <Box sx={{display: 'flex'}}>
                <Typography variant={'subtitle1'} sx={{mr: 1, mb: 1}}>
                    My photos 4
                </Typography>
            </Box>
            <ImageList sx={{ maxWidth: 540, m: 0, flexWrap: 'wrap'}} cols={4} rowHeight={135}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=135&h=135&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=135&h=135&fit=crop&auto=format&dpr=2 2x`}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </StyledPaper>
    );
};

export default Photos;