import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImagesListContainer from 'app/containers/ImagesList';

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={ImagesListContainer} />
  </Switch>
);

export default AppRoutes;
