import React from 'react'
import { Link } from 'react-router-dom'

import Picture from './Picture'
import Card from './Card'

export default function Tile(props) {
  const { id, image, title_long, tag, slug } = props

  return (
    <div className="adrenalin-card col-12 col-lg-6 col-md-12">
      <div className="card-top">
        <Card tag={tag} />
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
