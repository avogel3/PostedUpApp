const LOAD = "PostedUpApp/posts/load";
const LOAD_FAIL = "PostedUpApp/posts/LOAD_FAIL";
const LOAD_INDEX_SUCCESS = "PostedUpApp/posts/LOAD_INDEX_SUCCESS";
const LOAD_POST_SUCCESS = "PostedUpApp/posts/LOAD_POST_SUCCESS";

// Reducer
const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: "",
  post: {}
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case LOAD_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOAD_POST_SUCCESS:
      return { ...state, loading: false, post: action.payload };
    default:
      return state;
  }
}

// API Calls
function fetchPostsFromApp() {
  let localHost = "http://localhost:3000/posts.json";
  return fetch(localHost);
}

function fetchSinglePostFromApp(postId) {
  let localHost = `http://localhost:3000/posts/${postId}.json`;
  return fetch(localHost);
}

// Action Creators
export function loadPosts() {
  return dispatch => {
    dispatch({ type: LOAD });
    fetchPostsFromApp()
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
  dispatch({ type: LOAD_INDEX_FAIL, payload: error });
};

const loadPostSuccess = (dispatch, post) => {
  dispatch({ type: LOAD_POST_SUCCESS, payload: post });
};
