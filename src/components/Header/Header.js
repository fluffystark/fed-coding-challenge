import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import NavItem from '../NavItem/NavItem'

import {ReactComponent as Logo} from '../../assets/img/adrenalin.svg'
import {ReactComponent as BurgerIcon} from '../../assets/icons/burger.svg'
import './Header.scss'

export default function Header() {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(!show)

  return (
    <nav className="navbar row navbar-expand-md">
      <Link to="/" style={{lineHeight:'100%'}}><Logo className="logo" /></Link>
      <button className="navbar-toggler" type="button" onClick={toggleShow}>
        <BurgerIcon />
      </button>
      <div className={`ml-auto collapse navbar-collapse flex-grow-0 ${show ? 'show' : ''}`}>
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
