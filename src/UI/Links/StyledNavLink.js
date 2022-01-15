import {styled} from "@mui/material/styles";
import {NavLink} from "react-router-dom";

export const SlyledNavLink = styled(NavLink)(({theme}) => ({
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
