import { Box, Typography } from "@mui/material";
import React from "react";

export default function UndergraduateCouncil() {
    return(
        <Box sx={{backgroundColor: '#ED1D24'}}>
            <Box sx={{paddingTop: '55px', paddingBottom: '55px'}}>
                <Typography variant='h4' align="center" sx={{color: '#fbd0d2', fontWeight: 'bold'}}>
                    Undergraduate Council
                </Typography>
            </Box>
            <Box sx={{height: '30px', backgroundColor: '#760A0D'}}/>
            <Box className="pattern cross-dots-light" sx={{backgroundColor: '#fde7e8', height: '100vh'}} />
        </Box>
    ); 
}