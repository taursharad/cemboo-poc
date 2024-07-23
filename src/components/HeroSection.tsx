import { Add, PlayArrow } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";

interface HeroSectionProps {
  handleOpenVideoModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleOpenVideoModal }) => {
  return (
    <Box className="hero__wrapper">
      <Box className="hero__main">
        <Box className="hero__content">
          <Typography className="content--title">Stranger Things</Typography>
          <Typography className="content--subtitle">Season 1</Typography>
          <Typography className="content--description">
            The journey of aspiring boxers as they battle challenges inside and
            outside the ring, striving for glory and redemption in this gripping
            web series.
          </Typography>
          <Box className="hero__rating">
            <Typography className="hero__episodes">10 Episodes</Typography>
            <hr className="hero__first" />
            <Box className="rating--info">
              <img src="/images/imdb.svg" alt="logo" />
              <Typography className="ratings">8.5</Typography>
            </Box>
            <hr className="hero__second" />
            <Typography className="rating--info2"> 18+ Adult Rated</Typography>
          </Box>
          <Box className="hero__play">
            <IconButton className="icon--btn">
              <Add />
            </IconButton>
            <Button className="trailer--btn">
              <img src="/images/binacular_icon.svg" alt="binacular" /> WATCH
              TRAILER
            </Button>
            <Button className="trailer--btn--mobile">
              <img src="/images/binacular_icon.svg" alt="binacular" />
              TRAILER
            </Button>
            <Button
              className="play--btn"
              startIcon={<PlayArrow />}
              onClick={handleOpenVideoModal}
            >
              PLAY
            </Button>
          </Box>
        </Box>

        <Box className="hero__content--mobile">
          <Typography className="content--title">Stranger Things</Typography>
          <Typography className="content--subtitle">Season 1</Typography>
          <Box className="genre">
            <ul>
              <li>Grietty</li>
              <li>Drama</li>
              <li>Survival</li>
            </ul>
          </Box>
          <Box className="hero__rating">
            <Typography className="hero__episodes">10 Episodes</Typography>
            <hr className="hero__first" />
            <Box className="rating--info">
              <img src="/images/imdb.svg" alt="logo" />
              <Typography className="ratings">8.5</Typography>
            </Box>
            <hr className="hero__second" />
            <Typography className="rating--info2"> 18+ Adult</Typography>
          </Box>
          <Box className="hero__play">
            <IconButton className="icon--btn">
              <Add />
            </IconButton>
            <Button className="trailer--btn">
              <img src="/images/binacular_icon.svg" alt="binacular" />
              TRAILER
            </Button>
            <Button className="trailer--btn--mobile">
              <img src="/images/binacular_icon.svg" alt="binacular" />
              TRAILER
            </Button>
            <Button
              className="play--btn"
              startIcon={<PlayArrow />}
              onClick={handleOpenVideoModal}
            >
              PLAY
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
