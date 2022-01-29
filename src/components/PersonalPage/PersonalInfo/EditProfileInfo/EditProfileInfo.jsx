import React, {useEffect, useState} from 'react';
import {StyledPaper} from "../../../../UI/StyledPaper";
import Box from "@mui/material/Box";
import {Grid, Tab, Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";
import MainProfileForm from "./MainProfileForm";
import ContactsProfileForm from "./ContactsProfileForm";
import {useDispatch, useSelector} from "react-redux";
import {editProfileInfo, fetchProfile} from "../../../../redux/actions/personalPage";
import Loading from "../../../../Loading";

const profileInfoContacts = ['Github', 'Vk', 'FaceBook', 'Instagram', 'Twitter', 'Website', 'Youtube', 'MainLink']

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const EditProfileInfo = ({userId}) => {
    const dispatch = useDispatch()
    const {profile} = useSelector(({personalPage}) => personalPage)
    const {isLoading} = useSelector(({personalPage}) => personalPage)
    const [formState, setFormState] = useState({})
    const [value, setValue] = useState(0);
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        dispatch(fetchProfile(userId))
    }, [])

    useEffect(() => {
        setFormState(profile)
    }, [profile])


    useEffect(() => {
       return  function hidePopUp () {
           setOpenAlert(false)
        }
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSubmit = (data) => {
        let newProfile = {
            ...data,
            contacts: {
                ...profile.contacts
            }
        }
        setOpenAlert(true)
        dispatch(editProfileInfo(newProfile))
    };
    const onSubmitContacts = (data) => {
        let newProfile = {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                ...data
            }
        }
        setOpenAlert(true)
        dispatch(editProfileInfo(newProfile))
    };

    return (
        <Grid container spacing={2}>
            <Grid xs={8} item>
                <TabPanel value={value} index={0}>
                    {
                        isLoading ? <MainProfileForm onSubmit={onSubmit} profile={profile} openAlert={openAlert}/> : <Loading/>
                    }

                </TabPanel>
                <TabPanel value={value} index={1}>
                    {
                        isLoading ? <ContactsProfileForm onSubmit={onSubmitContacts} profile={profile} openAlert={openAlert}/> : <Loading/>
                    }
                </TabPanel>
            </Grid>
            <Grid item xs={4}>
                <StyledPaper>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        sx={{borderRight: 1, borderColor: 'divider'}}
                    >`
                        <Tab label={'Main'}/>
                        <Tab label={'Contacts'}/>
                    </Tabs>
                </StyledPaper>
            </Grid>
        </Grid>
    );
};

export default EditProfileInfo;