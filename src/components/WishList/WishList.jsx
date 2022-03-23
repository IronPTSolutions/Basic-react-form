import WishListItem from './WishListItem'

const WishList = ({ books, deleteItem }) => {
  const calculatePages = () => {
    return books.reduce((acc, curr) => acc + curr.pages, 0)
  }

  return (
    <ol className="WishList list-group list-group-numbered">
      {books && books.length > 0 ? (
        books.map((book) => (
          <WishListItem
            key={book.id} {...book} onDelete={() => deleteItem(book.id)}
          />
        ))
      ) : (
        <p className="text-muted">You don't have books yet</p>
      )}

      {books && books.length > 0 && (
        <div className="mt-3">
          <p><strong>Pages to read:</strong> {calculatePages()} pages</p>
        </div>
      )}
    </ol>
  )
}

export default WishList