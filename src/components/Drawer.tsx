import React, { useState } from 'react';
import clsx from 'clsx';
import PersistentDrawer from '@material-ui/core/Drawer';
import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const Drawer: React.FC<any> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position="fixed"
      >
        <ToolBar>
          <IconButton className={clsx(classes.menuButton, open && classes.h)} color="inherit" aria-label="open-drawer" edge="start" onClick={toggleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h3">Shapes</Typography>
        </ToolBar>
      </AppBar>
      <PersistentDrawer open={open}>
        <IconButton onClick={toggleOpen}>
          <MenuOpenIcon />
        </IconButton>
        <div>Hello World</div>
      </PersistentDrawer>
    </div>
  );
};
