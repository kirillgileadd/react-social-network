import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Button, Popover, TextField, Typography} from "@mui/material";
import {alpha, styled} from "@mui/material/styles";
import {StyledPaper} from "../../../../UI/StyledPaper";
import {useDispatch, useSelector} from "react-redux";
import {putStatus, setLoadingStatusAction} from "../../../../redux/actions/personalPage";

export const StatusButton = styled(Typography)(({theme}) => ({
    position: 'relative',
    display: 'block',
    width: '100%',
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.1),
        borderRadius: '3px'
    }
}))

export const StatusPopover = styled(Popover)(({theme}) => ({
    position: 'absolute',
    zIndex: '1',
}))


const StatusItem = ({currentUser}) => {
    const dispatch = useDispatch()
    const status = useSelector(({personalPage}) => personalPage.status)
    const [anchorEl, setAnchorEl] = useState(null);
    const [statusValue, setStatusValue] = useState(status)

    useEffect(() => {
            setStatusValue(status.statusValue)
    }, [status.statusValue])

    const handleStatusValue = (e) => {
        let {value} = e.target
        setStatusValue(value)
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        dispatch(putStatus(statusValue, setAnchorEl))
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <Box sx={{
            '& 	.MuiPopover-root': {
                width: '100% !important'
            }
        }}>
            {
                currentUser ? <StatusButton
                        aria-haspopup="true"
                        onClick={handlePopoverOpen}
                        variant={"text.body2"}
                    >
                        {status.statusValue || 'Change Status'}
                    </StatusButton> :
                    <Typography>{status.statusValue || 'There is no status'}</Typography>
            }

            <StatusPopover
                disableAutoFocus
                disablePortal
                disableScrollLock
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <StyledPaper sx={{display: 'flex', flexDirection: 'column', mb: 0, width: '300px'}}>
                    <TextField
                        value={statusValue}
                        onChange={handleStatusValue}
                        autoFocus
                        variant={'outlined'}
                        sx={{mb: 1}}/>
                    <Button
                        disabled={!status.isLoading}
                        sx={{width: '50px', alignSelf: 'flex-end'}}
                        variant={'contained'}
                        onClick={handlePopoverClose}
                    >
                        Save
                    </Button>
                </StyledPaper>
            </StatusPopover>
        </Box>
    );
};

export default StatusItem;