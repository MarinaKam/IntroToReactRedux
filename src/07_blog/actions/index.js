import jsonPlaceholder from '../api/JSONPlaceholder';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_USER = 'FETCH_USER';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = new Set(getState().posts.map(el => el.userId));
  userId.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: FETCH_POSTS, payload: response.data })
    };

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data })
};