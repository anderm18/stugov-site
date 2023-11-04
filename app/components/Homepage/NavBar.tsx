import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "@mui/material/Link";
import React from "react";

export default function NavBar() {
    return (
        <Box sx={{display: {md: 'flex'}, backgroundColor: '#760A0D', minHeight: '25px', padding: '5px'}}>
            <Typography align="center">
                <KeyboardArrowDownIcon sx={{color: 'white', marginTop: {xs: '20px', md: '0'}, fontWeight: 'bold', margin: 'auto'}} />
            </Typography>
            <Typography align="center" color="white" sx={{marginTop: {xs: '20px', md: '0'}, fontWeight: 'bold', margin: 'auto'}}>
                <Link href="/undergraduatecouncil" underline="none" color="white">
                    Undergraduate Council
                </Link>
            </Typography>
            <Typography align="center" color="white" sx={{marginTop: {xs: '20px', md: '0'}, fontWeight: 'bold', margin: 'auto'}}>
                <Link href="/executiveboard" underline="none" color="white">
                    Executive Board
                </Link>
            </Typography>
            <Typography align="center" color="white" sx={{marginTop: {xs: '20px', md: '0'}, fontWeight: 'bold', margin: 'auto'}}>
                <Link href="/senate" underline="none" color="white">
                    Senate
                </Link>
            </Typography>
            <Typography align="center" color="white" sx={{marginTop: {xs: '20px', md: '0'}, marginBottom: {xs: '20px', md: '0'}, fontWeight: 'bold', margin: 'auto'}}>
                <Link href="/graduatecouncil" underline="none" color="white">
                    Graduate Council
                </Link>
            </Typography>
        </Box>
    );
}