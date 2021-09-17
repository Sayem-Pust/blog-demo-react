import {
  REQUEST_POST_SUCCESS,
  REQUEST_POST_PENDING,
  REQUEST_POST_FAILED,
  REQUEST_CREATE_POST_SUCCESS,
  REQUEST_CREATE_POST_PENDING,
  REQUEST_CREATE_POST_FAILED,
  REQUEST_POST_DETAILS_PENDING,
  REQUEST_POST_DETAILS_SUCCESS,
  REQUEST_POST_DETAILS_FAILED,
  REQUEST_EDIT_POST_PENDING,
  REQUEST_EDIT_POST_SUCCESS,
  REQUEST_EDIT_POST_FAILED
} from "./constants";


const initialStatePosts = {
  isPending: false,
  posts: [],
  postDetail: {},
  error: "",
  success: false,
};

export const requestPosts = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case REQUEST_POST_PENDING:
      return Object.assign({}, state, { isPending: true, success: false });

    case REQUEST_POST_SUCCESS:
      return Object.assign({}, state, {
        posts: action.payload,
        isPending: false,
      });

    case REQUEST_POST_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: true,
      });

    case REQUEST_POST_DETAILS_PENDING:
      return { ...state, isPending: true, success: false };

    case REQUEST_POST_DETAILS_SUCCESS:
      console.log(action.payload);
      return { ...state, isPending: false, postDetail: action.payload };

    case REQUEST_POST_DETAILS_FAILED:
      return { ...state, isPending: true, success: false };

    case REQUEST_CREATE_POST_PENDING:
      return { ...state, isPending: true, success: false };

    case REQUEST_CREATE_POST_SUCCESS:
      return { ...state, isPending: false, success: true };

    case REQUEST_CREATE_POST_FAILED:
      return { ...state, isPending: true, success: false };

    case REQUEST_EDIT_POST_PENDING:
      return { ...state, isPending: true, success: false };

    case REQUEST_EDIT_POST_SUCCESS:
      return { ...state, isPending: false, success: true };

    case REQUEST_EDIT_POST_FAILED:
      return { ...state, isPending: true, success: false };

    default:
      return state;
  }
};

