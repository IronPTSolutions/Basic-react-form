import BookItem from './BookItem'

const BooksList = ({ books, addItem }) => {
  return (
    <div className="BooksList list-group">
      {books.map((book) => (
        <BookItem key={book.id} addItem={() => addItem(book)} {...book} />
      ))}
    </div>
  )
}

export default BooksList