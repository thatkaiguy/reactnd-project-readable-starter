export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  posts: json
})

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch('http://localhost:3001/posts', {headers: {Authorization: 'test'}})
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}