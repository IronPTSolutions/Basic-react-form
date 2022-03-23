const BookItem = ({ title, description, pages, addItem }) => {
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
      </div>
      <p className="mb-1">{description}</p>
      <div>
        <button onClick={addItem} className="btn btn-primary">
          Add item to wishlist
        </button>
      </div>
      <small className="text-muted">{pages} pages</small>
    </div>
  )
}

export default BookItem