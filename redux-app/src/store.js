import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import reducers from 'app/reducers';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL || '/',
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const packages = [];
const enhancers = [];

// Push middleware that you need for both development and production
packages.push(routerMiddleware(history));
packages.push(thunk);

if (process.env.NODE_ENV === 'development') {
  // Push the middleware that are specific for development
  packages.push(createLogger());
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const middleware = applyMiddleware(...packages);

export const store = createStore(persistReducer(persistConfig, reducers(history)), compose(middleware, ...enhancers));

export const persistor = persistStore(store);

export default {
  store,
  persistor,
  history,
};
