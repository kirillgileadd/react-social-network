import {styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";
import {red} from "@mui/material/colors";

export const AddPostInput = styled(InputBase)(({theme}) => ({
    transition: 'all 0.3s !important',
    marginTop: '3px !important',
   '&.Mui-focused': {
       color: red,
       transition: 'all 0.3s !important',
       height: '150px',
       display: 'flex',
       alignItems: 'flex-start',
       '.MuiInputBase-input': {
           height: '150px !important',
           display: 'flex',
           alignItems: 'flex-start'
       },
   }
}));