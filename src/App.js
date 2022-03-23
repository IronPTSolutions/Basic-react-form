import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import BooksList from "./components/BooksList/BooksList";
import Navbar from "./components/misc/Navbar/Navbar";
import NewForm from "./components/NewForm/NewForm";
import WishList from "./components/WishList/WishList";
import books from './data/books.json'

class App extends Component {
  state = {
    books: [...books],
    wishList: []
  }

  addItemToWishList = (book) => {
    const { wishList } = this.state
    const canAdd = !wishList.some(({ id }) => book.id === id)

    if (canAdd) {
      this.setState({ wishList: [book, ...wishList] })
    }
  }

  deleteItemFromWishList = (id) => {
    this.setState({ wishList: this.state.wishList.filter(book => book.id !== id) })
    // this.setState((prevState) => {
    //   return {
    //     books: prevState.books.filter(book => book.id !== id)
    //   }
    // })
  }

  onAddBook = (book) => {
    const newBook = {
      ...book,
      id: uuidv4()
    }
    this.setState({ books: [newBook, ...this.state.books] })
  }

  render() {
    const { books, wishList } = this.state

    return (
      <div className="App">
        <Navbar />
      
        <div className="container mt-4">
          <NewForm onAddBook={this.onAddBook} />
          <div className="row">
            <div className="col">
              <h1>Books list</h1>
              <BooksList books={books} addItem={this.addItemToWishList} />
            </div>
            <div className="col">
              <h1>Wish List</h1>
              <WishList books={wishList} deleteItem={this.deleteItemFromWishList} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
