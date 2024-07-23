import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "/images/categories.svg";
import ProfileIcon from "@mui/icons-material/PermIdentity";
import Paper from "@mui/material/Paper";
import { Drawer, List, ListItem, Typography } from "@mui/material";

const FixedBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [openHome, setOpenHome] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const toggleHomeDrawer = () => {
    setOpenHome(!openHome);
  };
  const toggleCategoriesDrawer = () => {
    setOpenCategory(!openCategory);
  };
  const toggleProfileDrawer = () => {
    setOpenProfile(!openProfile);
  };
  return (
    <Box className="wrapper-bottom-navigation-menu" sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        className="navigation-menu-main"
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          className="__bottom-navigation-menu"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            className="--icon-label"
            label="Home"
            icon={<HomeIcon className="--icon-home" />}
            onClick={() => toggleHomeDrawer()}
          />

          <BottomNavigationAction
            className={` ${
              openCategory ? "--highlighted-label" : "--icon-label"
            }`}
            label="Categories"
            icon={
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0H1.5C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1V7C0.5 7.26522 0.605357 7.51957 0.792893 7.70711C0.98043 7.89464 1.23478 8 1.5 8H7.5C7.76522 8 8.01957 7.89464 8.20711 7.70711C8.39464 7.51957 8.5 7.26522 8.5 7V1C8.5 0.734784 8.39464 0.48043 8.20711 0.292893C8.01957 0.105357 7.76522 0 7.5 0ZM6.5 6H2.5V2H6.5V6ZM17.5 10H11.5C11.2348 10 10.9804 10.1054 10.7929 10.2929C10.6054 10.4804 10.5 10.7348 10.5 11V17C10.5 17.2652 10.6054 17.5196 10.7929 17.7071C10.9804 17.8946 11.2348 18 11.5 18H17.5C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V11C18.5 10.7348 18.3946 10.4804 18.2071 10.2929C18.0196 10.1054 17.7652 10 17.5 10ZM16.5 16H12.5V12H16.5V16ZM14.5 0C12.294 0 10.5 1.794 10.5 4C10.5 6.206 12.294 8 14.5 8C16.706 8 18.5 6.206 18.5 4C18.5 1.794 16.706 0 14.5 0ZM14.5 6C13.397 6 12.5 5.103 12.5 4C12.5 2.897 13.397 2 14.5 2C15.603 2 16.5 2.897 16.5 4C16.5 5.103 15.603 6 14.5 6ZM4.5 10C2.294 10 0.5 11.794 0.5 14C0.5 16.206 2.294 18 4.5 18C6.706 18 8.5 16.206 8.5 14C8.5 11.794 6.706 10 4.5 10ZM4.5 16C3.397 16 2.5 15.103 2.5 14C2.5 12.897 3.397 12 4.5 12C5.603 12 6.5 12.897 6.5 14C6.5 15.103 5.603 16 4.5 16Z"
                  fill={`${openCategory ? "#B7F84D" : "white"}`}
                />
              </svg>
            }
            onClick={() => toggleCategoriesDrawer()}
          />
          <BottomNavigationAction
            className={` ${
              openProfile ? "--highlighted-label" : "--icon-label"
            }`}
            label="My profile"
            icon={<ProfileIcon className="--icon-profile" />}
            onClick={() => toggleProfileDrawer()}
          />
        </BottomNavigation>
      </Paper>
      <Box className="drawer--navigation">
        <Drawer
          anchor="bottom"
          // open={openHome}
          onClose={() => toggleHomeDrawer()}
        >
          Home
        </Drawer>
        <Drawer
          anchor="bottom"
          open={openCategory}
          onClose={() => toggleCategoriesDrawer()}
        >
          <List className="categories--list">
            <ListItem className="my-list">
              <img src="/images/icons/list.svg" alt="list" />
              <Typography className="title">My List</Typography>
            </ListItem>
            <ListItem className="browse-list">
              <img src="/images/icons/langauge.svg" alt="list" />

              <Typography className="title"> Browse By Language</Typography>
            </ListItem>
            <ListItem className="trending-list">
              <img src="/images/icons/trending.svg" alt="list" />
              <Typography className="title">Trending</Typography>
            </ListItem>
            <ListItem className="newly-list">
              <img src="/images/icons/new.svg" alt="list" />

              <Typography className="title"> Newly Launched</Typography>
            </ListItem>
          </List>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={openProfile}
          onClose={() => toggleProfileDrawer()}
        >
          <List className="profile--list">
            <ListItem className="my-list">
              <img src="/images/icons/manageProfile.svg" alt="list" />
              <Typography className="title">Manage Profiles</Typography>
            </ListItem>
            <ListItem className="browse-list">
              <img src="/images/icons/settings.svg" alt="list" />

              <Typography className="title">App Settings</Typography>
            </ListItem>
            <ListItem className="trending-list">
              <img src="/images/icons/account.svg" alt="list" />
              <Typography className="title">Account</Typography>
            </ListItem>
            <ListItem className="newly-list">
              <img src="/images/icons/signOut.svg" alt="list" />

              <Typography className="title">Sign Out</Typography>
            </ListItem>
            <ListItem className="newly-list">
              <img src="/images/icons/help.svg" alt="list" />

              <Typography className="title">Help</Typography>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default FixedBottomNavigation;
