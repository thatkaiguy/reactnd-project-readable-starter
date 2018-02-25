import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class PostListItem extends Component {
  render() {
    const { title, author, commentsCount, voteScore } = this.props

    return(
      <Item>
        <Item.Content>
          <Item.Header as='a'>{title}</Item.Header>
          <Item.Extra>Author: {author}</Item.Extra>
          <Item.Extra>{commentsCount || 0} Comments</Item.Extra>
          <Item.Extra>Score: {voteScore}</Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default PostListItem