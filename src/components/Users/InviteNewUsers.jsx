import React from 'react';
import {Button, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from "@mui/material/IconButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: "250px",
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

const InviteNewUsers = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} sx={{boxShadow: "0", '&:hover': {boxShadow: '0'}}} variant={'contained'}>
                Invite new Users
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Share the link
                    </Typography>
                    <IconButton color={"primary"} sx={{borderColor: 'primary', border: '1px solid'}} variant={'outlined'}>
                        <TelegramIcon  sx={{fontSize: 100}}/>
                    </IconButton>

                </Box>
            </Modal>
        </>
    );
};

export default InviteNewUsers;