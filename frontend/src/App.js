import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// components
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          
        </p>
        <CategoryList items={category.items} loading={category.loading} />
        <PostList items={post.items} loading={post.loading} />
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
