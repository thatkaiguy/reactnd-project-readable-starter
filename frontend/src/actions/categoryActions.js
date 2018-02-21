export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
})

export const receiveCategories = (json) => ({
  type: RECEIVE_CATEGORIES,
  categories: json.categories
})

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return fetch('http://localhost:3001/categories', {headers: {Authorization: 'test'}})
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json)))
}