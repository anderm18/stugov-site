import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types'
import type { GetStaticProps, InferGetStaticPropsType } from "next";


const infoElement: ((dataHead: string, dataTitle: string, dataDesc: string) => JSX.Element) = (dataHead: string, dataTitle: string, dataDesc: string) => {
    return(
        <Grid item xs={12} sm={6} sx={{ marginTop: '20px'}}>
            <Card sx={{backgroundColor: 'transparent', height: '100%'}} elevation={0}>
                <CardContent>
                    <Typography sx={{color: '#ED1D24', fontWeight: 'bold', fontSize: '15pt'}}>
                        {dataHead}
                    </Typography>
                    <Typography sx={{marginTop: '15px', fontSize: '20pt', fontWeight: 'bold'}}>
                        {dataTitle}
                    </Typography>
                    <Typography sx={{color: '#760A0D', marginTop: '15px', fontSize: '15pt'}}>
                        {dataDesc}
                    </Typography>
                </CardContent>
            </Card>  
        </Grid>
    );
}

const imageElement: ((imageAddress: string) => JSX.Element) = (imageAddress: string) => {
    console.log(`url(${imageAddress}))`);
    return(
        <Grid item xs={12} sm={6} sx={{marginLeft: {xs: '10px', sm: '0'}, marginRight: {xs: '10px', sm: '0'}, marginTop: '20px'}}>
            <Card sx={{backgroundImage: `url(${imageAddress})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', minHeight: '200px'}} elevation={0}/>
        </Grid>
    );
}

export default function InfoGallery({infoData}: {infoData: InfoPanelResponse}): JSX.Element {
    console.log(infoData);
    let counter: number = 0;
    return(
        <Box sx={{margin: '20px'}}>
            <Grid container spacing={4}>
                {
                    infoData.map((element) => {
                        counter++;
                        return counter%2!=0 ? (
                            <>
                                {infoElement(element.subheader, element.header, element.desc)}
                                {imageElement(element.img)}
                            </>
                        ): (
                            <>
                                {imageElement(element.img)}
                                {infoElement(element.subheader, element.header, element.desc)}
                            </>
                        ) 
                    })
                }
            </Grid>
        </Box>
    );
}