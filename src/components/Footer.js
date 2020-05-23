import React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'
import {ReactComponent as Logo} from '../assets/img/adrenalin.svg'
import theme from './Theme'

const FooterContainer = styled.div`
  margin-top: 6.25rem;
  border-top: 2px solid black;
  padding-bottom: 53px;

  .adrenalin-footer-row {
    display: flex;
    justify-content: space-between;

    @media ${theme.largeMobileScreen} {
      display: block;

      .footer-link-container {
        display: flex;
        flex-wrap: wrap;
        padding-top: 1rem;
        > .adrenalin-nav-link {
          width: 50%;
        }
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer className="row">
      <div className="col">
        <div className="adrenalin-footer pt-4">
          <div className="row">
            <div className="col adrenalin-footer-row">
              <Logo className="logo footer" />
              <div className="footer-link-container">
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
    </FooterContainer>
  )
}
