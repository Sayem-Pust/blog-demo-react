import {
  REQUEST_POST_PENDING,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILED,
} from "./constants";

export const requestPosts = () => (dispatch) => {
  dispatch({ type: REQUEST_POST_PENDING });
  fetch("http://127.0.0.1:8000/api/blog/")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_POST_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_POST_FAILED, payload: err }));
};

