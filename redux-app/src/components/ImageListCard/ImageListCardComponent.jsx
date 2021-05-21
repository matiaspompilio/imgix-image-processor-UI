import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import useStyles from './ImageListCardStyles';
import PropTypes from 'prop-types';

export const ImageListCardComponent = ({ name, src }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={src} title={name} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>This is a media card. You can use this section to describe the content.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

ImageListCardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageListCardComponent;
