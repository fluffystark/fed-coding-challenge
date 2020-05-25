import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import theme from './Theme'
import Picture from './Picture'
import Card from './Card'

const StyledLink = styled(Link)`
  padding-top: 4rem;

  > .card-top {
    position: relative;

    > img {
      height: 390px;
    }
  }

  > .title {
    padding-right: 7.5rem;

  @media ${theme.largeMobileScreen} {
    padding-right: 4rem;
  }
}
`

export default function Tile(props) {
  const { id, image, title_long, tag, slug } = props

  return (
    <StyledLink to={`/case/${id}`} className="col-12 col-lg-6 col-md-12">
      <div className="card-top">
        <Card tag={tag} />
        <Picture img={ image } slug={ slug } />
      </div>
      <h3 className="pt-4 pb-3 title">{ title_long }</h3>
      <div className="pt-3 d-flex align-items-center">
        <hr className="outline-bar blue" />
        <div className="outline-text">
          <small>VIEW CASE STUDY</small>
        </div>
      </div>
    </StyledLink>
  )
}
