import { Dashboard } from "@mui/icons-material";
import {
  CSSObject,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from "@mui/material";
import React, { Fragment } from "react";
import MuiDrawer from "@mui/material/Drawer";

const openedMixin = (theme: Theme): CSSObject => ({
  width: 280,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface SideBarProps {
  open: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: 280,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar: React.FC<SideBarProps> = ({ open }) => {
  return (
    <Fragment>
      <Drawer variant="permanent" open={open} className="drawer__container">
        <List className="drawer__list--wrapper">
          <ListItemButton className="list--btn">
            <ListItemIcon className="item--icon">
              <Dashboard className="mail--icon" />
            </ListItemIcon>
            <ListItemText primary="Layout Components" />
          </ListItemButton>
          <ListItemButton className="list--btn">
            <ListItemIcon className="item--icon">
              <Dashboard className="mail--icon" />
            </ListItemIcon>
            <ListItemText primary="Layout Components" />
          </ListItemButton>
          <ListItemButton className="list--btn">
            <ListItemIcon className="item--icon">
              <Dashboard className="mail--icon" />
            </ListItemIcon>
            <ListItemText primary="Layout Components" />
          </ListItemButton>
          <ListItemButton className="list--btn">
            <ListItemIcon className="item--icon">
              <Dashboard className="mail--icon" />
            </ListItemIcon>
            <ListItemText primary="Layout Components" />
          </ListItemButton>
          <ListItemButton className="list--btn">
            <ListItemIcon className="item--icon">
              <Dashboard className="mail--icon" />
            </ListItemIcon>
            <ListItemText primary="Layout Components" />
          </ListItemButton>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default SideBar;
