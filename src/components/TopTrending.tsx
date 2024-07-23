import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles

const TopTrending = () => {
  return (
    <Box className="trending__main--wrapper">
      <Box className="trending__wrapper">
        <Box className="trending__header">
          <Typography className="header--title">Top Trending</Typography>
          <Button className="header--btn">See All</Button>
        </Box>
        <Box className="trending__slider">
          <Swiper
            spaceBetween={40} // Optional: Spacing between slides
            breakpoints={{
              375: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 0,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }} // Optional: Number of slides visible at once
          >
            <SwiperSlide>
              {/* <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">1</Typography>
                </Box>
                <Box className="image--holder">
                  <img src="/images/poster.png" alt="poster" />
                </Box>
              </Box> */}
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">1</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending1.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">
                      The Batman
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">2</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending2.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">My Candy</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">3</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending3.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">65 </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">4</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending4.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">The Queen</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">5</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending5.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">
                      Doctor Strange
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">6</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending3.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">65</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">7</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending2.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">My Candy</Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">8</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending1.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">
                      The Batman
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Box className="slider--content">
                <Box>
                  <Typography className="slider--number">9</Typography>
                </Box>
                <Box className="image--holder">
                  <Box className="slider--title">Trending</Box>
                  <img src="/images/trending5.png" alt="poster" />
                  <Box className="slider--bottom">
                    <Typography className="bottom--title">
                      Doctor Strange
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>{" "}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default TopTrending;
