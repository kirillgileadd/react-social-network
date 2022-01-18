import {alpha, styled} from "@mui/material/styles";
import {Button, Paper, ToggleButton} from "@mui/material";
import {red} from "@mui/material/colors";

export const LikesButton = styled(ToggleButton)(({theme}) => ({
    color: theme.palette.grey[500],
    borderRadius: '20px',
    border: "none",
    '&: hover': {
      backgroundColor: alpha(theme.palette.primary.light, 0.1)
    },
    '&.Mui-selected' : {
        color: red['500'],
        backgroundColor: red["50"],
        '&: hover': {
            backgroundColor: red["50"]
        }
    }
}));