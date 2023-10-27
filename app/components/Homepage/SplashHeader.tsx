import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import React, { ComponentType } from "react";

const Typer: ComponentType<{
  strings: string[];
  style?: any;
}> = dynamic(() => import('./TypewriterWrapper'), {
  ssr: false
});

export default function SplashHeader(): JSX.Element {
    return(
        <>
            <Box  style={{backgroundColor: '#ED1D24', height: '600px'}}>
                <Typography sx={{color: '#fbd0d2', position: 'absolute', top: {xs: '100px', sm: '170px'}, left: {xs: '50px', sm: '80px', md: '100px', lg: '120px', xl: '140px'}, fontSize: {xs: '25pt', sm: '40pt', lg: '60pt'}, fontWeight: 'bold', zIndex: '10' }}>
                    Governing
                    <Typer strings={['change', 'innovation', 'technology']} style={{fontStyle: 'italic', fontFamily: 'Roboto'}} />
                </Typography>
                <Avatar src='union.png' sx={{position: 'absolute', left: {xs: 'calc(100% - 272px)', sm:'calc(100% - 320px)', md: 'calc(100% - 450px)'}, top: {xs: '255px', sm:'200px', md: '150px'}, width: {xs: '250px', sm: '300px', md: '400px'}, height: {xs: '250px', sm: '300px', md: '400px'}, backgroundColor: 'transparent', borderRadius: '50%', zIndex: '1'}}/>
                <Box sx={{float: 'right', width: '0', height: '0', borderLeft: {xs: '300px solid transparent', sm: '400px solid transparent', md: '600px solid transparent'}, borderRight: '0px solid transparent', borderBottom: '600px solid #760A0D'}}/>
            </Box>
            <Box sx={{backgroundColor: '#760A0D', height: '20px', padding: '5px'}}/>
        </>
    );
}