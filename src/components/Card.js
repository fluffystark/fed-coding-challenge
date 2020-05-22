import React from 'react'
import Picture from './Picture'

export default function Card(props) {
  const { image, title_long, tag, slug } = props
  return (
    <div className="adrenalin-card col col-lg-6">
      <div className="card-top">
        <div className="tag">{ tag }</div>
        <Picture img={ image } slug={slug} />
      </div>
      <h3 className="pt-4 pb-3 title">{ title_long }</h3>
      <div className="pt-3 d-flex align-items-center">
        <hr />
        <span className="outline-text">VIEW CASE STUDY</span>
      </div>
    </div>
  )
}
