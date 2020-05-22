import React from 'react'
import Picture from './Picture'
import { Link } from 'react-router-dom'

export default function Card(props) {
  const { id, image, title_long, tag, slug } = props
  return (
    <div className="adrenalin-card col-12 col-lg-6 col-md-12">
      <div className="card-top">
        <div className="tag">{ tag }</div>
        <Picture img={ image } slug={ slug } />
      </div>
      <h3 className="pt-4 pb-3 title">{ title_long }</h3>
      <div className="pt-3 d-flex align-items-center">
        <hr className="outline-bar blue" />
        <Link to={`/case/${id}`} className="outline-text">
          <small>VIEW CASE STUDY</small>
        </Link>
      </div>
    </div>
  )
}
