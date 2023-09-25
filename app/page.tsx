import SplashHeader from './components/Homepage/SplashHeader';
import InfoGallery from './components/Homepage/InfoGallery';
import Box from '@mui/material/Box';

export default function Home(): JSX.Element {
  return (
    <Box className="pattern cross-dots-light" sx={{backgroundColor: '#fde7e8', height: '100%'}}>
      <SplashHeader/>
      <InfoGallery jsondata={undefined}/>
    </Box>
  );
}

