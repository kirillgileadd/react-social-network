import {styled} from "@mui/material/styles";
import {Button, Paper} from "@mui/material";

export const LiskesButton = styled(Button)(({theme}) => ({
    color: theme.palette.grey[500],
    borderRadius: '20px',
}));