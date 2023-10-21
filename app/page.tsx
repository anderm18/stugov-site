import { Box } from "@mui/material";
import SplashHeader from "./components/Homepage/SplashHeader";
import InfoGallery from "./components/Homepage/InfoGallery";
import Footer from "./components/Homepage/Footer";
import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const retrieveGalleryInfo: () => Promise<InfoPanelResponse> = async () => {
  
    const data: Response = await fetch('http://localhost:3000/api/homepage', {
        cache: "force-cache"
    });

    const processed: InfoPanelResponse = await data.json();

    return processed;
}

export default async function Homepage(): Promise<JSX.Element> {

    const data: InfoPanelResponse = await retrieveGalleryInfo();

    return (
      <Box className="pattern cross-dots-light" sx={{backgroundColor: '#fde7e8', height: '100%'}}>
        <SplashHeader/>
        <InfoGallery infoData={data}/>
        <Footer/>
        
      </Box>
    );
}

