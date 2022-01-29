import React from 'react';
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

const FormButton = ({children, ...props}) => {
    return (
        <Box sx={{pt: 2, mt: 2, borderTop: '1px solid', borderColor: 'grey.200'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
            type={'submit'}
            variant={'contained'}
            {...props}
        >
            {children}
        </Button>
        </Box>
    );
};

export default FormButton;