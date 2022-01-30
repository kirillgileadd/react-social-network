import React from 'react';
import {useForm} from "react-hook-form";
import {Box, Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const LoginForm = ({onSubmit}) => {
    const schema = yup.object({
        email: yup.string().email('Your email is incorrect').required(''),
        rememberMe: yup.boolean().default(false),
        password: yup.string()
            .when('email', {
                is: value => value.includes('@'),
                then: yup.string().min(3),
            })
    }).required();

    const {handleSubmit, register, formState, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {mb: 1, mt: 1},
            }}
        >
            <Box>
                <TextField
                    {...register("email")}
                    helperText={errors.email && errors.email.message}
                    error={!!errors.email}
                    name="email"
                    label="E-Mail"
                    defaultValue=""
                    fullWidth
                />
                <TextField
                    {...register("password")}
                    helperText={errors.password && errors.password.message}
                    error={!!errors.password}
                    name="password"
                    type="password"
                    label="Пароль"
                    fullWidth
                />
                <FormControlLabel control={<Checkbox
                    defaultChecked={false}
                    {...register('rememberMe')}
                    name="rememberMe"  />} label="Remember me" />
            </Box>
            <Box >
                <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default LoginForm;