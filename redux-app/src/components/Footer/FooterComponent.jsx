import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './FooterStyles';

export const FooterComponent = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        IIPU
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Imgix Image Processor UI
      </Typography>
    </footer>
  );
};

export default FooterComponent;
