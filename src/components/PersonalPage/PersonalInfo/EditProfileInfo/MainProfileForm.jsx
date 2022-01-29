import React from 'react';
import Box from "@mui/material/Box";
import {Alert, AlertTitle, Button, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {StyledPaper} from "../../../../UI/StyledPaper";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import MainInput from "../../../../UI/Form/MainInput";
import FormButton from "../../../../UI/Form/FormButton";

const MainProfileForm = ({onSubmit, profile, openAlert}) => {
    const schema = yup.object({
        fullName: yup.string().required('Full Name it is a required field'),
        aboutMe: yup.string().min(5).required('About me it is a required field'),
        lookingForAJob: yup.boolean(),
        lookingForAJobDescription: yup.string()
            .when('lookingForAJob', {
                is: value => Boolean(value),
                then: yup.string().min(3),
            })
    })

    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues: {
            fullName: profile?.fullName,
            aboutMe: profile?.aboutMe,
            lookingForAJob: profile?.lookingForAJob,
            lookingForAJobDescription: profile?.lookingForAJobDescription,
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const lookingForAJob = watch("lookingForAJob");

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
                        <MainInput name={'Full Name:'}>
                            <TextField
                                {...register("fullName")}
                                id={'fullName'}
                                name={'fullName'}
                                type="text"
                                error={!!errors.fullName}
                                helperText={errors?.fullName?.message}
                            />
                        </MainInput>

                        <MainInput name={'About me:'}>
                            <TextField
                                {...register("aboutMe")}
                                id={'aboutMe'}
                                name={'aboutMe'}
                                type="text"
                                error={!!errors.aboutMe}
                                helperText={errors?.aboutMe?.message}
                            />
                        </MainInput>
                        <MainInput>
                            <FormControlLabel control={
                                <Checkbox
                                    {...register("lookingForAJob")}
                                    name={"lookingForAJob"}
                                    defaultValue={profile?.lookingForAJob}
                                    defaultChecked={profile?.lookingForAJob}
                                />
                            } label={'Looking for a job'}>
                            </FormControlLabel>
                        </MainInput>
                        {
                            lookingForAJob &&
                            <MainInput name={'Looking for a Job Description:'}>
                                <TextField
                                    {...register("lookingForAJobDescription")}
                                    id={'lookingForAJobDescription'}
                                    name={'lookingForAJobDescription'}
                                    type="text"
                                    error={!!errors.lookingForAJobDescription}
                                    helperText={errors?.lookingForAJobDescription?.message}
                                />
                            </MainInput>
                        }
                    </Grid>
                        <FormButton >Save</FormButton>
                </Box>
            </StyledPaper>

        </div>
    );
};

export default MainProfileForm;