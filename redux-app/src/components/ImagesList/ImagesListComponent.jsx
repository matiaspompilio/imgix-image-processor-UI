import React from 'react';
import { Button, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import ImageListCard from 'src/components/ImageListCard';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import useStyles from './ImageListStyles';
import PropTypes from 'prop-types';

export const ImagesListComponent = ({ images }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Empieza con elegir una de las imagenes del listado o puedes intentar subir tu propia imagen
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Nueva imagen
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {images.map(({ name, url }, index) => (
              <Grid item key={`${name}-${index}`} xs={12} sm={6} md={4}>
                <ImageListCard name={name} src={url} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

ImagesListComponent.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

export default ImagesListComponent;
