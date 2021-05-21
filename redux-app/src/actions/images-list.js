import { IMAGES_LIST_GET_REQUEST, IMAGES_LIST_GET_SUCCESS, IMAGES_LIST_GET_FAILURE } from 'src/constants/images-list';
import fetchImages from 'src/services/images';

export const getImages = () => async (dispatch) => {
  dispatch({ type: IMAGES_LIST_GET_REQUEST });
  try {
    const response = await fetchImages();
    dispatch({ type: IMAGES_LIST_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: IMAGES_LIST_GET_FAILURE });
  }
};

export default {
  getImages,
};
