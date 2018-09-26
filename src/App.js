import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './HomePage.js'
import SearchPage from './SearchPage.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShell = (book, shell) => {
    BooksAPI.update(book, shell)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query, 5)    
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchPage booksList={this.state.books} onQuerySearch={this.searchBooks} onSelectShell={this.changeShell} /> )} />
        <Route exact path="/" render={() => (
            <HomePage booksList={this.state.books} onSelectShell={this.changeShell} /> )} />
      </div>
    )
  }
}

export default BooksApp
