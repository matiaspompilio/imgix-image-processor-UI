import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import imagesListReducer from './images-list';

export default (history) =>
  combineReducers({
    // connected react router reducer with history binding
    router: connectRouter(history),

    // redux form reducer
    form: formReducer,

    // custom reducers
    imagesList: imagesListReducer,
  });
