const LOAD = "PostedUpApp/posts/load";
const LOAD_SUCCESS = "PostedUpApp/posts/load_success";
const LOAD_FAIL = "PostedUpApp/posts/load_fail";
// Reducer
const INITIAL_STATE = {
  loading: false,
  posts: [],
  error: ""
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case LOAD_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// API Call
function fetchPostsFromApp() {
  let localHost = "http://localhost:3000/posts.json";
  return fetch(localHost);
}

// Action Creators
export function loadPosts() {
  return dispatch => {
    dispatch({ type: LOAD });
    fetchPostsFromApp()
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        loadPostsSuccess(dispatch, responseJson.posts);
      })
      .catch(error => {
        loadPostsFail(dispatch, error);
      });
  };
}

// Action Creator Helpers
const loadPostsSuccess = (dispatch, posts) => {
  dispatch({ type: LOAD_SUCCESS, payload: posts });
};

const loadPostsFail = (dispatch, error) => {
  dispatch({ type: LOAD_FAIL, payload: error });
};
