import { Box, Link, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box className="footer__wrapper">
      <Box className="footer__above">
        <Box className="footer__logo">
          <Box className="footer__img">
            <img src="/images/logo.png" alt="logo" />
          </Box>
          <Box className="footer__address">
            <Typography className="footer__address-box">
              123 Main St, Apt 4B,
              <br /> Springfield, IL 62704
            </Typography>
          </Box>
        </Box>
        <Box className="footer__help">
          <Typography className="footer__help-title">Help</Typography>
          <Box className="footer__help-link">
            <Link className="footer--links">Help Support</Link>
            <Link className="footer--links">Terms & Conditions</Link>
            <Link className="footer--links">Delivery Details</Link>
            <Link className="footer--links">Privacy Policy</Link>
          </Box>
        </Box>
        <Box className="footer__about">
          <Typography className="footer__about-title">About Us</Typography>
          <Box className="footer__about-link">
            <Link className="footer--links">30 day money back guarantee</Link>
            <Link className="footer--links">
              Support teams across the world
            </Link>
            <Link className="footer--links">
              Secure and safe online payment
            </Link>
          </Box>
        </Box>
        <Box className="footer__social">
          <Box className="footer__social-title">
            <Typography className="footer__social-text">
              Social Media
            </Typography>
          </Box>
          <Box className="footer__social-icon">
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </Box>
      <Box className="footer__copyright">
        <Typography className="footer__copyright-text">
          © Copyright 2024, All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
