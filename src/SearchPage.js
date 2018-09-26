import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    query: '',
    showingBooks: []
  }
  updateQuery = (query) => {
    this.setState({ query })
    if(query) {
      BooksAPI.search(query, 5).then((showingBooks) => {
        showingBooks.map((currBook) => (
          this.props.booksList.map((homeBook) => (
            homeBook.id === currBook.id ? currBook.shelf = homeBook.shelf : ''
          ))
        ))
        this.setState({showingBooks})
      }).catch((e) => {
        console.log('error: ', e)
        this.setState({showingBooks: []})
      })
    } else {
      this.setState({showingBooks: []})
    }
  }

  render() {
    
	return <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 { this.state.showingBooks.map((currBook) => (
                  <Book key={currBook.id} book={currBook} onSelectShell={this.props.onSelectShell} />
                 ))}
              </ol>
            </div>
          </div>
   }
}

export default SearchPage