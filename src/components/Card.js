import React from 'react'

export default function Card(props) {
  const { tag } = props
  return (
    <div className="tag">{ tag }</div>
  )
}
