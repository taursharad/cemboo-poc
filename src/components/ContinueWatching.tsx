import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles

const ContinueWatching = () => {
  return (
    <Box className="watching__main--wrapper">
      <Box className="watching__wrapper">
        <Box className="watching__header">
          <Typography className="header--title">Continue Watching</Typography>
          <Button className="header--btn">See All</Button>
        </Box>
        <Box className="watching__slider">
          <Swiper
            spaceBetween={40} // Optional: Spacing between slides
            breakpoints={{
              375: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5.5,
                spaceBetween: 40,
              },

              768: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }} // Optional: Number of slides visible at once
          >
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching1.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">Black Widow</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching2.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">
                    Django Unchained
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching3.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">
                    Flash-The Movie
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching4.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">Oppenheimer</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching5.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">
                    Black Panther
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching6.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">Star Wars</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching7.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">
                    Top Gun- Maverick
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching8.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">Mad Max</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching9.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">Fight Club</Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box className="slider--title">Trending</Box>
                <img src="/images/watching10.png" alt="poster" />
                <Box className="slider--bottom">
                  <Typography className="bottom--title">
                    The Last of Us
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default ContinueWatching;
