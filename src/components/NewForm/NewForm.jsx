import { Component } from "react"

const initialState = {
  title: '',
  description: '',
  pages: '',
  error: false
}

class NewForm extends Component {
  state = { ...initialState }

  onSubmit = (event) => {
    const { pages, title, description } = this.state
    event.preventDefault()

    if (title && description && pages && Number(pages) > 1) {
      this.props.onAddBook({
        title,
        description,
        pages: Number(pages)
      })

      this.resetForm()
    } else {
      this.setState({ error: true })
    }
  }

  resetForm = () => {
    this.setState({ ...initialState })
  }

  onHandleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  onFocus = () => {
    const { error } = this.state

    if (error) {
      this.setState({ error: false })
    }
  }

  render() {
    const { title, description, pages, error } = this.state

    return (
      <form className="NewForm" onSubmit={this.onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            onFocus={this.onFocus}
            value={title} onChange={this.onHandleChange} name="title"
            className="form-control" id="title" placeholder="Write your title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            onFocus={this.onFocus}
            value={description} onChange={this.onHandleChange}
            className="form-control" id="description" name="description"
            rows={3} placeholder="Write your description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pages" className="form-label">Pages</label>
          <input
            onFocus={this.onFocus}
            value={pages} onChange={this.onHandleChange} name="pages"
            min={1}
            type="number" className="form-control" id="pages" placeholder="Number of pages"
          />
        </div>

        {error && (
          <p className="text-danger">Invalid form</p>
        )}

        <button className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

export default NewForm