import { Box, Typography } from "@mui/material";
import React from "react";



export default function UndergraduateCouncil() {
    return(
        <Box className="pattern cross-dots-light" sx={{backgroundColor: '#fde7e8', height: '100vh'}}>
            <Box style={{backgroundColor: '#ED1D24', height: '100px'}}>
                <Typography align="center" variant="h4" sx={{paddingTop: '25px',color: '#fbd0d2', fontWeight: 'bold'}}>
                    Undergraduate Council
                </Typography>
            </Box>
            <Box sx={{backgroundColor: '#760A0D', height: 'auto'}}>
                <Typography align="center" sx={{padding:'10px', color: '#fbd0d2'}}>
                    The Rensselaer Union Undergraduate Council is the undergraduate-specific arm of student government, focusing on overseeing and encouraging communication between the four Class Councils that represent each respective undergraduate class. The Class Councils and the Undergraduate Council each plan events for the undergraduate student population and carry out RPI traditions. 
                </Typography>
            </Box>
        </Box>
        
    ); 
}