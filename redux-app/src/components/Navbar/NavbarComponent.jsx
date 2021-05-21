import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './NavbarStyles';

export const NavbarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          IIPU
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
