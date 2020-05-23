import React from 'react'
import styled from 'styled-components'
import theme from './Theme'

const CardContainer = styled.div`
  font-size: .75rem;
  line-height: .75rem;
  text-transform: uppercase;
  color: ${theme.gray700};
  background: ${theme.gray100};
  margin-bottom: 0px;
  padding-left: .625rem;
  padding-bottom: .75rem;

  white-space: nowrap;
  position: absolute;
  top: -1px;
  right: calc(100% + 0.5px);
  transform: rotate(-90deg);
  transform-origin: right top;
`

export default function Card(props) {
  const { tag } = props
  return (
    <CardContainer>{ tag }</CardContainer>
  )
}
