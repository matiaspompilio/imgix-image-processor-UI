import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'app/theme';

import { store, persistor, history } from 'app/store';

import Loading from 'app/components/Loading';
import AppRoutes from 'app/routes/AppRoutes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <Suspense fallback={<Loading />}>
        <ConnectedRouter history={history}>
          <AppRoutes />
        </ConnectedRouter>
      </Suspense>
    </PersistGate>
  </Provider>
);

export default App;
