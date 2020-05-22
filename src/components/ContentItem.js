import React from 'react'
import moment from 'moment';

export default function ContentItem(props) {
  const { id, date, text } = props

  const titleId = id + 1
  const parsedDate = moment(date)
  // const formatDate = 

  return (
    <div className="content-item">
      <div className="row">
        <h2>Content title {titleId}</h2>
      </div>
      <div className="row align-items-center date">
        <hr className="outline-bar" />
        <small>{parsedDate.format("DD/MM/YYYY")}</small>
      </div>
      <div className="row">
        <p>{text}</p>
      </div>
    </div>
  )
}
