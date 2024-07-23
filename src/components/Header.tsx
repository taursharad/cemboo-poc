import CssBaseline from "@mui/material/CssBaseline";
import { Box, Toolbar, styled, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface HeaderProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ open }) => {
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: 240,
      width: `100%`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="static" open={open} className="header">
        <Toolbar className="header__toolbar">
          <Box className="header__logo">
            <Box className="logo--wrapper">
              <img src="/images/logo.png" alt="logo" />
            </Box>
          </Box>
          <Box className="header__navigation">
            <ul>
              <li>Home</li>
              <li>Newly Launched</li>
              <li>Trending</li>
              <li>My list</li>
              <li>Language</li>
            </ul>
          </Box>
          <Box className="header__left--side">
            <img src="/images/search_icon.svg" alt="icon" />

            <Box className="avatar--holder">
              <img src="/images/avatar.svg" alt="avatar" />
            </Box>

            <Typography className="header__user">
              Hello, Hayden Craddolph
            </Typography>
          </Box>

          <Box className="header__mobile--wrapper">
            <Box className="header__mobile">
              <Typography className="header__user">
                Hello, Hayden Craddolph
              </Typography>
              <img src="/images/search_icon.svg" alt="search" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
