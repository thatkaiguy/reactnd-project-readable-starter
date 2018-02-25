import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
  category: categoryReducer,
  post: postReducer,
})

export default rootReducer