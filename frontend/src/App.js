import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// components
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import CategoryList from './components/CategoryList'
import PostList from './components/PostList'
// misc
import { fetchCategories } from './actions/categoryActions'
import { fetchPosts } from './actions/postActions'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    dispatch(fetchPosts())
  }

  render() {
    const { category, post } = this.props

    return (
      <div className="App">
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Project Readable
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Categories</Menu.Item>
            <Menu.Item as='a'>Posts</Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '3em' }}>
          <CategoryList items={category.items} loading={category.loading} />
        </Container>
        <Container text style={{ marginTop: '3em' }}>
          <PostList items={post.items} loading={post.loading} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.category,
    post: state.post
  }
}

export default connect(mapStateToProps)(App);
