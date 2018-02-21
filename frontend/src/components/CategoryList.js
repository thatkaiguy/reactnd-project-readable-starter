import React, { Component } from 'react'

class CategoryList extends Component {
  render() {
    const { loading, items } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    return (
      <ul className='category-list'>
        {items.map((category) => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default CategoryList