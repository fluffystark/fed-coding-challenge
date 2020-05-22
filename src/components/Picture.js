import React from 'react'

export default function Picture(props) {
  const { img, slug } = props
  const src = require('../assets/img/' + img)
  return (
    <img src={src} alt={slug} />
  )
}
