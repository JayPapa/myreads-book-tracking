# MyReads Project

This is a project for Udacity's React Fundamentals course. In the MyReads project, I create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as the user interacts with the application.
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading
Want to Read
Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is always the current shelf the book is in. The main page also has a link to /search, a search page that allows you to find books to add to your library.
The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. When a book is on a bookshelf, it has the same state on both the main application page and the search page. The search page also has a link to / (the root URL), which leads back to the main page. When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## How to get Started?

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* enjoy myReads!!


## Backend Server

To simplify the development process, Udacity provided a backend server for to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
This project also used [React Router](https://github.com/ReactTraining/react-router) to handle app location.
