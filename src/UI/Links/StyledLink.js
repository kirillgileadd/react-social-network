import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)(({theme}) => ({
    width: '100%',
    color: 'inherit',
    textDecoration: 'none',
}));
