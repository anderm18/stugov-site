import { Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";


export default function Footer() {
    return (
        <Box sx={{backgroundColor: '#760A0D', height: '50px', marginTop: '50px'}}>
            <Typography align="center" sx={{paddingTop: '10px'}}>
                <GitHubIcon sx={{color: 'white', marginTop: '4px'}} />
            </Typography>
        </Box>
    )
}