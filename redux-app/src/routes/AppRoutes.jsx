import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ImageListContainer from 'app/containers/ImagesList';

const AppRoutes = () => (
  <Switch>
    <Route path="/" component={ImageListContainer} />
  </Switch>
);

export default AppRoutes;
