import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

interface VideoModalProps {
  openModal: boolean;
  handleOpenVideoModal: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  openModal,
  handleOpenVideoModal,
}) => {
  return (
    <Modal
      open={openModal}
      onClose={handleOpenVideoModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <Box>
        <Box className="video-modal">
          <Box className="video__play">
            <video controls className="video--play-box" autoPlay>
              <source src="/images/trailer_image.png" type="video/webm" />
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
          <Box className="video__content">
            <Box className="content--top">
              <Box className="content--info">
                <Box className="content--left">
                  <Typography className="title">Stranger Things</Typography>
                  <Typography className="subtitle">Season 1</Typography>
                  <Typography className="description">
                    The journey of aspiring boxers as they battle challenges
                    inside and outside the ring, striving for glory and
                    redemption in this gripping web series.
                  </Typography>
                  <Box className="media__rating">
                    <Typography className="media__episodes">
                      10 Episodes
                    </Typography>
                    <hr className="media__divider" />
                    <Box className="rating--info">
                      <img src="/images/imdb.svg" alt="logo" />
                      <Typography className="ratings">8.5</Typography>
                    </Box>
                    <hr className="media__divider" />
                    <Typography className="rating--info2">
                      18+ Adult Rated
                    </Typography>
                  </Box>
                </Box>
                <Box className="content--right">
                  <Typography className="right--cast">
                    <span>Cast:</span> John Doe, Emily Rudd, & more
                  </Typography>
                  <Typography className="right--genre">
                    <span>Genre:</span>TV Action & Adventure, Fantasy, US TVG
                    shows
                  </Typography>
                </Box>
              </Box>
              <Box className="episodes__wrapper">
                <Box className="episodes__top">
                  <Typography className="episodes__top-title">
                    Episodes
                  </Typography>
                  <Typography className="episodes__top-subtitle">
                    Season 1
                  </Typography>
                </Box>
                <Box className="list__wrapper">
                  <Box className="list__content">
                    <Box className="list--number-box">
                      <Typography className="numbers">1</Typography>
                      <img src="/images/rectangle-img.png" alt="view" />
                    </Box>
                    <Box className="description__wrapper">
                      <Box className="description--top">
                        <Typography className="description--top-title">
                          Chapter One: MADMAX
                        </Typography>
                        <Typography className="description--top-time">
                          53 min
                        </Typography>
                      </Box>
                      <Typography className="description--content">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default VideoModal;
