import React from 'react'
import styled from 'styled-components'

import theme from './Theme'

const NavItemContainer = styled.a`
  padding-left: 26px;
  padding-right: 7px;
  font-size: .875rem;
  line-height: .875rem;
  color: black;

  &:hover {
    color: ${theme.gray500};
    text-decoration: none;
  }

  @media ${theme.largeMobileScreen} {
    padding: 1rem 0;
  }
`


export default function NavItem(props) {
  return (
    <NavItemContainer href="#">
      {props.children}
    </NavItemContainer>
  )
}
