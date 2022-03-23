const WishListItem = ({ title, pages, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <span className="badge bg-primary rounded-pill">{pages}</span>
    </li>
  )
}

export default WishListItem