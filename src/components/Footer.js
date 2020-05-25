import React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'
import {ReactComponent as Logo} from '../assets/img/adrenalin.svg'
import theme from './Theme'

const FooterContainer = styled.div`
  margin-top: 6.25rem;
  padding-bottom: 53px;

  .adrenalin-footer {
    border-top: 2px solid black;
  }

  .adrenalin-footer-row {
    display: flex;
    justify-content: space-between;

    @media ${theme.largeMobileScreen} {
      display: block;

      .footer-link-container {
        display: flex;
        flex-wrap: wrap;
        padding-top: 1rem;
        > .adrenalin-nav-footer-link {
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
    </FooterContainer>
  )
}
