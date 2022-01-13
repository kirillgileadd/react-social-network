import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import {Grid} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {alpha, styled} from "@mui/material/styles";

const SlyledLink = styled(NavLink)(({theme}) => ({
    width: '100%',
    color: '#000',
    textDecoration: 'none',
    '&.active': {
        color: theme.palette.primary.main,
        '& .MuiSvgIcon-root': {
            color: theme.palette.primary.dark
        }
    }
}));

export default function NavBar({navItems}) {
    return (


        <Grid item xs={2}>
            <nav aria-label="main mailbox folders" disablePadding>
                <List sx={{
                    '& .MuiListItemButton-root': {
                        borderRadius: "5px"
                    },
                    '& .MuiListItem-root': {
                        padding: 0
                    },
                }}>
                    {
                        navItems.map((item) =>
                            <SlyledLink to={item.link}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>{item.name}</ListItemText>
                                </ListItemButton>
                            </SlyledLink>
                        )
                    }
                </List>
            </nav>
        </Grid>
    );
}
