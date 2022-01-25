import React, {useState, useEffect} from 'react';
import {Alert} from "@mui/material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const PrettyBlock = () => {
    const [open, setOpen] = useState(true)

    return open && <Alert icon={<SentimentSatisfiedAltIcon fontSize="small"/>} sx={{mb: 2}} onClose={() => {
        setOpen(false)
    }}>You're beautiful when you smile :)</Alert>
};

export default PrettyBlock;