import React from 'react'

export default function NavItem(props) {
  return (
    <a className="adrenalin-nav-link" href="#">{props.children}</a>
  )
}
