import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Grid} from "@mui/material";
import {SlyledNavLink} from "../../UI/Links/StyledNavLink";
import {useSelector} from "react-redux";

export default function NavBar({navItems}) {

    return (
        <Grid item xs={2}>
            <nav aria-label="main mailbox folders">
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
                            <ListItemButton disabled={item.disabled} sx={{p: 0}} key={item.name}>
                                <SlyledNavLink sx={{display: 'flex', alignItems: 'center', height: '100%', width: '100%', p: 1}} to={item.link} key={item.name}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>{item.name}</ListItemText>
                                </SlyledNavLink>
                            </ListItemButton>
                        )
                    }
                </List>
            </nav>
        </Grid>
    );
}
