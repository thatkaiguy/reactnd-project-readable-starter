function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchCategories () {

  return fetch('http://localhost:3001/categories')
    .then((res) => res.json())
    .then((args) => { debugger })
    // .then(({ categories }) => categories.map(({ category }) => category))
}