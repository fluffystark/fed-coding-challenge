import React from 'react'
import { Link } from 'react-router-dom'

import Picture from './../../../../components/Picture/Picture'
import Card from './../../../../components/Card/Card'

import './ListTile.scss'

export default function ListTile(props) {
  const { id, image, title_long, tag, slug } = props

  return (
    <div className="col-12 col-lg-6 col-md-12 list-tile">
      <Link to={`/case/${id}`}>
        <div className="card-top">
          <Card tag={tag} />
          <Picture img={ image } slug={ slug } />
        </div>
        <h3 className="pt-4 pb-3 title">{ title_long }</h3>
        <div className="pt-3 d-flex align-items-center">
          <hr className="outline-bar blue" />
          <div className="outline-text">
            <small>VIEW CASE STUDY</small>
          </div>
        </div> 
      </Link>
    </div>
  )
}
