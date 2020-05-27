import React from 'react'

import NavItem from '../NavItem/NavItem'
import {ReactComponent as Logo} from '../../assets/img/adrenalin.svg'

import './Footer.scss'

export default function Footer() {
  return (
    <div className="row footer-container">
      <div className="col">
        <div className="adrenalin-footer pt-4">
          <div className="row">
            <div className="col adrenalin-footer-row">
              <Logo className="logo footer" />
              <div className="footer-link-container">
                <NavItem className="adrenalin-nav-footer-link">Privacy</NavItem>
                <NavItem className="adrenalin-nav-footer-link">Sitemap</NavItem>
                <NavItem className="adrenalin-nav-footer-link">Facebook</NavItem>
                <NavItem className="adrenalin-nav-footer-link">Linkedin</NavItem>
                <NavItem className="adrenalin-nav-footer-link">Instagram</NavItem>
                <NavItem className="adrenalin-nav-footer-link">Twitter</NavItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
