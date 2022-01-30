import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Grid, Paper} from "@mui/material";
import {SlyledNavLink} from "../../UI/Links/StyledNavLink";
import {useSelector} from "react-redux";
import {styled} from "@mui/material/styles";


export const NavBarGrid = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        padding: "0px !important",
        position: 'fixed',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: '3',
        backgroundColor: '#fff'
    },
}));

export default function NavBar({navItems}) {

    return (
        <NavBarGrid item xs={0} md={2}>
            <nav aria-label="main mailbox folders">
                <List sx={{
                    padding: {xs: '8px', md: '10px 0px 0px 0px'},
                    display: {xs: 'flex', md: 'block'},
                    '& .MuiListItemButton-root': {
                        borderRadius: "5px"
                    },
                    '& .MuiListItem-root': {
                        padding: 0
                    },
                }}>
                    {
                        navItems.map((item) =>
                            <SlyledNavLink sx={{
                                height: '100%',
                                width: '100%',
                            }} to={item.link} key={item.name}>
                                <ListItemButton disabled={item.disabled} sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    width: '100%',
                                    p: 1
                                }} key={item.name}>
                                    <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText sx={{display: {xs: 'none', md: 'block'}}}>{item.name}</ListItemText>
                                </ListItemButton>
                            </SlyledNavLink>
                        )
                    }
                </List>
            </nav>
        </NavBarGrid>
    );
}
