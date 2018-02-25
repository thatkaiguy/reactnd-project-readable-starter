import React, { Component } from 'react'

class PostListItem extends Component {
  render() {
    const { title, author, commentsCount, voteScore } = this.props

    return(
      <div>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <div>Number of comments: {commentsCount}</div>
        <div>Score: {voteScore}</div>
      </div>
    )
  }
}

export default PostListItem