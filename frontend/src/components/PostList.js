import React, { Component } from 'react'
import PostListItem from './PostListItem'

class PostList extends Component {
  render() {
   const { loading, items } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    return (
      <ul className='post-list'>
        {items.map((post) => (
          <li key={post.id}>
            <PostListItem {...post} />
          </li>
        ))}
      </ul>
    )
  }
}

export default PostList