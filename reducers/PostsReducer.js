const LOAD = "PostedUpApp/posts/load";
const LOAD_FAIL = "PostedUpApp/posts/LOAD_FAIL";
const LOAD_INDEX_SUCCESS = "PostedUpApp/posts/LOAD_INDEX_SUCCESS";
const LOAD_POST_SUCCESS = "PostedUpApp/posts/LOAD_POST_SUCCESS";

// TODO: This really should be set in an env variable
const API_URL = "http:localhost:3000/api";

// Reducer
const INITIAL_STATE = {
  posts: [],
  error: "",
  post: {},
  loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_INDEX_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
      };
    case LOAD_FAIL:
      return { ...state, error: action.payload };
    case LOAD_POST_SUCCESS:
      return { ...state, post: action.payload, loading: false };
    default:
      return state;
  }
}

// API Calls
function fetchPostsFromApp(pageNum) {
  let getPostsIndexUrl = `${API_URL}/posts?page=${pageNum}`;
  return fetch(getPostsIndexUrl);
}

function fetchSinglePostFromApp(postId) {
  let getPostShowUrl = `${API_URL}/posts/${postId}`;
  return fetch(getPostShowUrl);
}

// Action Creators
export function loadPosts(pageNum) {
  return dispatch => {
    fetchPostsFromApp(pageNum)
      .then(response => response.json())
      .then(responseJson => {
        loadPostsIndexSuccess(dispatch, responseJson.posts);
      })
      .catch(error => {
        loadFail(dispatch, error);
      });
  };
}

export function loadSinglePost(postId) {
  return dispatch => {
    dispatch({ type: LOAD });
    fetchSinglePostFromApp(postId)
      .then(response => response.json())
      .then(responseJson => {
        loadPostSuccess(dispatch, responseJson);
      })
      .catch(error => {
        loadFail(dispatch, error);
      });
  };
}

// Action Creator Helpers
const loadPostsIndexSuccess = (dispatch, posts) => {
  dispatch({ type: LOAD_INDEX_SUCCESS, payload: posts });
};

const loadFail = (dispatch, error) => {
  dispatch({ type: LOAD_FAIL, payload: error });
};

const loadPostSuccess = (dispatch, post) => {
  dispatch({ type: LOAD_POST_SUCCESS, payload: post });
};
