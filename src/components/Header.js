import React from 'react'
import NavItem from './NavItem'
import {ReactComponent as Logo} from '../assets/img/adrenalin.svg'

export default function Header() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-between align-items-center">
        <Logo className="logo" />
        <div className="d-flex flex-row flex-wrap">
          <NavItem>Culture</NavItem>
          <NavItem>Work</NavItem>
          <NavItem>Clients</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Careers</NavItem>
          <NavItem>Contact</NavItem>
        </div>
      </div>
    </div>
  )
}
