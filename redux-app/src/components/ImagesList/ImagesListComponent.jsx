import React from 'react';
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography, Container } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import ImageListCard from 'src/components/ImageListCard';
import useStyles from './ImageListStyles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ImagesListComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ImageListCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default ImagesListComponent;
