import {
  REQUEST_POST_PENDING,
  REQUEST_POST_SUCCESS,
  REQUEST_POST_FAILED,
  REQUEST_CREATE_POST_PENDING,
  REQUEST_CREATE_POST_SUCCESS,
  REQUEST_CREATE_POST_FAILED,
  REQUEST_EDIT_POST_SUCCESS,
  REQUEST_EDIT_POST_PENDING, REQUEST_EDIT_POST_FAILED,
  REQUEST_POST_DETAILS_PENDING, REQUEST_POST_DETAILS_SUCCESS, REQUEST_POST_DETAILS_FAILED
} from "./constants";

export const requestPosts = () => (dispatch) => {
  dispatch({ type: REQUEST_POST_PENDING });
  fetch("http://127.0.0.1:8000/api/blog/", )
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_POST_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_POST_FAILED, payload: err }));
};

export const postDetails = (id) => (dispatch) => {
  dispatch({ type: REQUEST_POST_DETAILS_PENDING });
  fetch(`http://127.0.0.1:8000/api/blog/${id}/`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: REQUEST_POST_DETAILS_SUCCESS, payload: data })
    )
    .catch((err) =>
      dispatch({ type: REQUEST_POST_DETAILS_FAILED, payload: err })
    );
};

export const CreatePosts = (uploadData) => (dispatch) => {
  dispatch({ type: REQUEST_CREATE_POST_PENDING });
  fetch("http://127.0.0.1:8000/api/blog/", {
          method: "POST",
          body: uploadData
      })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      dispatch({ type: REQUEST_CREATE_POST_SUCCESS })
    }  
    )
    .catch((err) =>
      dispatch({ type: REQUEST_CREATE_POST_FAILED, payload: err })
    );
};

export const EditPosts = (id, uploadData) => (dispatch) => {
  dispatch({ type: REQUEST_EDIT_POST_PENDING });
  fetch(`http://127.0.0.1:8000/api/blog/${id}/`, {
    method: "PATCH",
    body: uploadData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: REQUEST_EDIT_POST_SUCCESS });
    })
    .catch((err) => dispatch({ type: REQUEST_EDIT_POST_FAILED, payload: err }));
};

