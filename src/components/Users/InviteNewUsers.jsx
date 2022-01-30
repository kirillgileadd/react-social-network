import React from 'react';
import {Button, Modal, Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import logo from '../../images/finalLogo.svg'

export const StyledModalBox = styled(Paper)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: "150px",
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    padding: '16px',
    [theme.breakpoints.down('md')]: {
        width: '260px',
    },
}));

const InviteNewUsers = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} sx={{boxShadow: "0", '&:hover': {boxShadow: '0'}}} variant={'contained'}>
                Invite Users
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalBox >
                    <Box display={'flex'} alignItems={'center'} sx={{mb: 2}}>
                        <img src={logo} style={{width: '50px', marginRight: '16px'}}/>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Share the link
                        </Typography>
                    </Box>
                    <TextField fullWidth value={'https://kirillgileadd.github.io/react-social-network'}/>
                </StyledModalBox>
            </Modal>
        </>
    );
};

export default InviteNewUsers;