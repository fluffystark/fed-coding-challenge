import React from 'react'
import moment from 'moment'

export default function DetailsContentItem(props) {
  const { id, date, text } = props

  return (
    <div className="content-item">
      <div className="row">
        <h2>Content title {id + 1}</h2>
      </div>
      <div className="row align-items-center date">
        <hr className="outline-bar" />
        <small>{moment(date).format("DD/MM/YYYY")}</small>
      </div>
      <div className="row">
        <p>{text}</p>
      </div>
    </div>
  )
}
