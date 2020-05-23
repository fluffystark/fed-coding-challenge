import React, {useState} from 'react'
import NavItem from './NavItem'
import {ReactComponent as Logo} from '../assets/img/adrenalin.svg'
import {ReactComponent as BurgerIcon} from '../assets/icons/burger.svg'

export default function Header() {
  const [show, setShow] = useState(false)

  const isShow = show ? 'show' : ''

  const toggleShow = () => setShow(!show)

  return (
    <nav className="navbar row navbar-expand-md">
      <Logo className="logo" />
      <button className="navbar-toggler" type="button" onClick={toggleShow}>
        <BurgerIcon />
      </button>
      <div className={`ml-auto collapse navbar-collapse flex-grow-0 ${isShow}`} id="navbarToggler">
        <div className="navbar-nav">
          <NavItem>Culture</NavItem>
          <NavItem>Work</NavItem>
          <NavItem>Clients</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Careers</NavItem>
          <NavItem>Contact</NavItem>
        </div>
      </div>
    </nav>
  )
}
