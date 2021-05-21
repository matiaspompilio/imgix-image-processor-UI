import { IMAGES_LIST_GET_REQUEST, IMAGES_LIST_GET_SUCCESS, IMAGES_LIST_GET_FAILURE } from 'src/constants/images-list';
import initialState from 'src/state/images-list';

const mutations = {
  [IMAGES_LIST_GET_REQUEST]: (state) => ({
    ...state,
    error: null,
    success: null,
    isFetching: true,
  }),

  [IMAGES_LIST_GET_SUCCESS]: (state, payload) => ({
    ...state,
    error: null,
    success: true,
    isFetching: false,
    data: payload,
  }),

  [IMAGES_LIST_GET_FAILURE]: (state, err) => ({
    ...state,
    error: err,
    success: false,
    isFetching: false,
  }),
};

export default (state = initialState, action) =>
  /* eslint-disable-next-line */
  mutations.hasOwnProperty(action.type) ? mutations[action.type](state, action.payload) : state;
