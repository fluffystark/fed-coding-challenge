import React from 'react'

import './NavItem.scss'

export default function NavItem(props) {
  const className = `adrenalin-nav-item ${props.className}`
  return (
    <div href="#" className={ className }>{props.children}</div>
  )
}
