import React, {useState} from 'react';
import {StyledPaper} from "../../../UI/StyledPaper";
import Box from "@mui/material/Box";
import {Button, Divider, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import MainPersonalInfoItems from "./PersonalInfoItems/MainPersonalInfoItems";
import PersonalInfoContacts from "./PersonalInfoItems/PersonalInfoContacts";


export const InfoBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
}));

export const InfoText = styled(Typography)(({theme}) => ({
    width: '250px'
}));

const PersonalInfo = ({fullName, aboutMe, contacts, lookingForAJob, lookingForAJobDescription}) => {
    const [showInfo, setShowInfo] = useState(false)
    let descriptionItems = [
        {title: 'Looking for a job', content: lookingForAJob},
        {title: 'Looking for a job description', content: lookingForAJobDescription},
    ]

    let contactsItems = [
        {title: 'Git', content: contacts.github},
        {title: 'Vk', content: contacts.vk},
    ]

    const handleShowInfo = () => {
        if (showInfo) {
            setShowInfo(false)
        } else {
            setShowInfo(true)
        }
    }

    return (
        <StyledPaper>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant={'h6'}>
                        {fullName}
                    </Typography>
                    <Typography variant={'body2'}>
                        {aboutMe || 'there is no description'}
                    </Typography>
                </Box>
                online
            </Box>
            <Divider sx={{margin: '10px 0'}}/>
            <Box>
                {
                    showInfo ?
                        <>
                            <Box>
                                <MainPersonalInfoItems descriptionItems={descriptionItems}/>
                                <Divider textAlign={'left'}>Contacts</Divider>
                                <PersonalInfoContacts contactsItems={contactsItems}/>
                            </Box>
                            <Button fullWidth onClick={handleShowInfo}>
                                <Typography sx={{textTransform: 'none'}}>Hide detail information</Typography>
                            </Button>
                        </>
                        :
                        <>
                            <MainPersonalInfoItems descriptionItems={descriptionItems}/>
                            <Button fullWidth onClick={handleShowInfo}>
                                <Typography sx={{textTransform: 'none'}}>Show detail information</Typography>
                            </Button>
                        </>
                }
            </Box>
        </StyledPaper>
    );
};

export default PersonalInfo;