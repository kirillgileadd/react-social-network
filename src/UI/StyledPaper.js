import {styled} from "@mui/material/styles";
import {Paper} from "@mui/material";

export const StyledPaper = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '15px',
    boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.21)",
    marginBottom: '16px',
    [theme.breakpoints.down('md')]: {
        margin: '0px 8px 16px 8px'
    },
}));