import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Grid} from "@mui/material";
import {SlyledNavLink} from "../../UI/Links/StyledNavLink";

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
                            <SlyledNavLink to={item.link} key={item.name}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>{item.name}</ListItemText>
                                </ListItemButton>
                            </SlyledNavLink>
                        )
                    }
                </List>
            </nav>
        </Grid>
    );
}
