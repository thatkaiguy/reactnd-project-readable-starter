import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/postActions'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        loading: true,
        error: null
      }

    case RECEIVE_POSTS:
      return {
        ...state,
        loading: false,
        items: action.posts
      }
    // TODO handle failure
    default:
      return state
  }
}