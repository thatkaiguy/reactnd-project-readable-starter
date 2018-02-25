import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import PostListItem from './PostListItem'

class PostList extends Component {
  render() {
   const { loading, items } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    return (
      <div>
        <Header>Posts</Header>
        {items.map((post) => (
          <PostListItem {...post} />
        ))}
      </div>
    )
  }
}

export default PostList