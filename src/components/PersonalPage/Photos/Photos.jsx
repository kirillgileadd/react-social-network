import React from 'react';
import {StyledPaper} from "../PersonalPage";
import {ImageList, ImageListItem, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const itemData = [
    {
        img: 'https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album',
        title: 'Breakfast',
    },
    {
        img: 'https://sun9-18.userapi.com/impg/c855616/v855616159/234a8e/M9wmXVwDQ70.jpg?size=1080x1080&quality=96&sign=cf510b04c5be3fb5cf7196885c088a17&type=album',
        title: 'Burger',
    },
    {
        img: 'https://sun9-9.userapi.com/impg/c855232/v855232203/209331/c326-GwqLns.jpg?size=1600x1200&quality=96&sign=53dfde957a1ffb3f12b1944bbab889d4&type=album',
        title: 'Camera',
    },
    {
        img: 'https://sun9-25.userapi.com/impg/c856024/v856024159/22e582/UAGZP_RJggc.jpg?size=1080x1080&quality=96&sign=a227eabd32803fe1a5fdfcf1a9ebd3d7&type=album',
        title: 'Camera',
    },
]

const Photos = () => {
    return (
        <StyledPaper sx={{mb: 2}}>
            <Box sx={{display: 'flex'}}>
                <Typography variant={'subtitle1'} sx={{mr: 1, mb: 1}}>
                    My photos 4
                </Typography>
            </Box>
            <ImageList sx={{ width: 545, m: 0}} cols={4} rowHeight={135}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=135&h=135&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=135&h=135&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </StyledPaper>
    );
};

export default Photos;