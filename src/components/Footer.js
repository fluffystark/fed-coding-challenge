import React from 'react'
import NavItem from './NavItem'
import {ReactComponent as Logo} from '../assets/img/adrenalin.svg'

export default function Footer() {
  return (
    <div className="row">
    <div className="col">
      <div className="adrenalin-footer pt-4">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <Logo className="logo footer" />
            <div className="d-flex flex-row flex-wrap">
              <NavItem>Privacy</NavItem>
              <NavItem>Sitemap</NavItem>
              <NavItem>Facebook</NavItem>
              <NavItem>Linkedin</NavItem>
              <NavItem>Instagram</NavItem>
              <NavItem>Twitter</NavItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
