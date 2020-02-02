import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createStyles,
  Theme,
  Drawer as MaterialDrawer
} from "@material-ui/core";
import { ConnectedMenu } from "../Menu/ConnectedMenu";
import {
  InitializeAction,
  CloseDrawerAction,
  OpenDrawerAction
} from "../../store/actions/actionTypes";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

export type DrawerValueProps = {
  isDrawerOpen: boolean;
};

export type DrawerFunctionProps = {
  initialize(): InitializeAction;
  openDrawer(): OpenDrawerAction;
  closeDrawer(): CloseDrawerAction;
};

export type DrawerProps = DrawerFunctionProps & DrawerValueProps;

const Drawer: React.FC<DrawerProps> = ({
  initialize,
  isDrawerOpen,
  openDrawer,
  closeDrawer
}) => {
  const classes = useStyles();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen
        })}
        position="fixed"
      >
        <ToolBar>
          <IconButton
            className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Shapes</Typography>
        </ToolBar>
      </AppBar>
      <MaterialDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeDrawer}>
            <MenuOpenIcon />
          </IconButton>
        </div>
        <ConnectedMenu />
      </MaterialDrawer>
    </div>
  );
};

Drawer.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  initialize: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

export default React.memo(Drawer);
