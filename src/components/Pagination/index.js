import React from 'react'
import './index.css'

class Pagination extends React.Component {
  state = {
    pageNo: 1,
  }

  onNextPage = () => {
    const {apiCallback, totalPages} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo < totalPages) {
          return {
            pageNo: prevState.pageNo + 1,
          }
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  onprevPage = () => {
    const {apiCallback} = this.props
    this.setState(
      prevState => {
        if (prevState.pageNo > 1) {
          return {
            pageNo: prevState.pageNo - 1,
          }
        }
        return prevState
      },
      () => {
        const {pageNo} = this.state
        apiCallback(pageNo)
      },
    )
  }

  render() {
    const {pageNo} = this.state
    const {totalPages} = this.props

    return (
      <div className="mb-3 d-flex justify-content-center align-items-center">
        <button type="button" className="control-btn" onClick={this.onprevPage}>
          Prev
        </button>
        <p className="page-no">{pageNo}</p>
        <button type="button" className="control-btn" onClick={this.onNextPage}>
          Prev
        </button>
      </div>
    )
  }
}

export default Pagination
