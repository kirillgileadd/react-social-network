import React from 'react';
import {StyledPaper} from "../../UI/StyledPaper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {Button, Grid} from "@mui/material";
import UserItem from "./UserItem";


const Users = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box sx={{typography: 'body1', padding: '15px', backgroundColor: 'grey.50', borderRadius: '5px 5px 0px 0px'}}>
                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            Tabs
                            <Button sx={{boxShadow: "0", '&:hover': {boxShadow: '0'}}} variant={'contained'}>
                                Follow User
                            </Button>
                        </Box>
                    </Box>
                    <StyledPaper sx={{borderRadius: '0px 0px 5px 5px', pt: 0}}>
                        <List sx={{width: '100%', padding: 0}}>
                            <UserItem/>
                        </List>
                    </StyledPaper>
                </Grid>
                <Grid item xs={4}>
                    <StyledPaper>
                        Content!
                    </StyledPaper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Users;