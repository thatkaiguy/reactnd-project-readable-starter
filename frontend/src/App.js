import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// components
import CategoryList from './components/CategoryList'
// misc
import { fetchCategories } from './actions/categoryActions'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
  }

  render() {
    const { category } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          
        </p>
        <CategoryList items={category.items} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { category: state.category }
}

export default connect(mapStateToProps)(App);