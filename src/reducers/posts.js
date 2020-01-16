import { POST_LOAD } from "../actions/action-types.js";

const initialState = {
  posts: [],
  loading: false,
  error: ""
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOAD:
      return { ...state, posts: action.payload };
    default:
      return { ...state };
  }
};

export default postsReducer;
