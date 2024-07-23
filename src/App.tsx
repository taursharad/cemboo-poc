import { Fragment } from 'react/jsx-runtime';
import Header from './components/Header';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import ContinueWatching from './components/ContinueWatching';
import HeroSection from './components/HeroSection';
import FixedBottomNavigation from './components/BottomNavigation';
import VideoModal from './components/VideoModal';
import TopTrending from './components/TopTrending';
import { get } from './helper/apiHelper';

function App() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const handleOpenVideoModal = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      const response = await get('s/4owen59r');
      console.log('Movie Data', response);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  // Create a theme instance
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter', // Replace with your preferred font family

        'sans-serif',
      ].join(','),
    },
  });

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Box className="app__wrapper">
          <Box className="wrapper--inside">
            <Header open={open} handleDrawerClose={handleDrawerClose} />

            <Box component="main" className="main__wrapper">
              <HeroSection handleOpenVideoModal={handleOpenVideoModal} />

              <TopTrending />
              <ContinueWatching />
            </Box>
            <FixedBottomNavigation />
            <Footer />
          </Box>
          <VideoModal
            openModal={openModal}
            handleOpenVideoModal={handleOpenVideoModal}
          />
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
