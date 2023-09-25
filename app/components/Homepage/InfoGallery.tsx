import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import React from "react";
import Typography from "@mui/material/Typography";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

type ResponseType = {
    hello: string
}

const firstElement: ((dataHead: string, dataTitle: string, dataDesc: string) => JSX.Element) = (dataHead: string, dataTitle: string, dataDesc: string) => {
    return(
        <Grid item xs={12} sm={6}>
            <Card sx={{backgroundColor: 'transparent', height: '100%'}} elevation={0}>
                <CardContent>
                    <Typography sx={{color: '#ED1D24', fontWeight: 'bold', fontSize: '15pt'}}>
                        Contribute
                    </Typography>
                    <Typography sx={{marginTop: '15px', fontSize: '20pt', fontWeight: 'bold'}}>
                        Work with your Community
                    </Typography>
                    <Typography sx={{color: '#760A0D', marginTop: '15px', fontSize: '15pt'}}>
                        Student Government gives students the opportunity to make real differences in the Rensselaer community. Contribute meaningful changes to make the student experience unforgettable.
                    </Typography>
                </CardContent>
            </Card>  
        </Grid>
    );
}

export const getStaticProps = (async (context) => {
    const res = await fetch('http://localhost:3000/api/homepage');
    console.log("HELLOOOOOO");
    const jsondata = await res.json()
    return { props: { jsondata }}
}) satisfies GetStaticProps<{
    jsondata: ResponseType
}>


export default function InfoGallery({
    jsondata,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    return(
        <>
            <Box sx={{margin: '20px'}}>
                <Grid container spacing={4}>
                    {firstElement(jsondata.hello, "", "")}
                    <Grid item xs={12} sm={6} sx={{marginLeft: {xs: '10px', sm: '0'}, marginRight: {xs: '10px', sm: '0'}}}>
                        <Card sx={{backgroundImage: 'url(rpi.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', minHeight: '200px'}} elevation={0}>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
