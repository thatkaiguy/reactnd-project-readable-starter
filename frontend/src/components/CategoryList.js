import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'

class CategoryList extends Component {
  render() {
    const { loading, items } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Header>Categories</Header>
        {items.map((category) => (
          <Button>
            {category.name}
          </Button>
        ))}
      </div>
    )
  }
}

export default CategoryList