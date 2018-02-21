import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/categoryActions'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function categoryReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: null
      }

    case RECEIVE_CATEGORIES:
      return {
        ...state,
        loading: false,
        items: action.categories
      }
    // TODO handle failure
    default:
      return state
  }
}