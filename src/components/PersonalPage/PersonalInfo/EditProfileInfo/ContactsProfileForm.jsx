import React from 'react';
import Box from "@mui/material/Box";
import {Alert, AlertTitle, Grid, TextField} from "@mui/material";
import {StyledPaper} from "../../../../UI/StyledPaper";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import MainInput from "../../../../UI/Form/MainInput";
import FormButton from "../../../../UI/Form/FormButton";
import {yupResolver} from "@hookform/resolvers/yup";

const ContactsProfileForm = ({onSubmit, profile, openAlert}) => {
    const contacts = Object.keys(profile.contacts)
    const schema = yup.object({

    })

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    return (
        <div>
            <Box sx={{
                typography: 'body1',
                padding: '15px',
                backgroundColor: 'grey.50',
                borderRadius: '5px 5px 0px 0px'
            }}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    Main
                </Box>
            </Box>
            <StyledPaper sx={{borderRadius: 0, boxShadow: 0}}>
                {
                    openAlert &&
                    <Alert sx={{mb: 2}} severity="success">
                        <AlertTitle>Changes saved</AlertTitle>
                        The new data will be reflected on your profile.
                    </Alert>
                }
                <Box
                    component={'form'}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid container spacing={2} alignItems={'center'}>
                        {
                            contacts.map((item) => <MainInput key={item} name={item}>
                                <TextField name={item} id={item} {...register(item)} defaultValue={profile.contacts[item]}/>
                            </MainInput>)
                        }
                    </Grid>
                    <FormButton>Save</FormButton>
                </Box>
            </StyledPaper>

        </div>
    );
};

export default ContactsProfileForm;