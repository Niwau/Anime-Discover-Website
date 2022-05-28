import React from 'react'
import { Container } from './Header.styled'

export default function Header(props) {
  return (
    <Container>{props.children}</Container>
  )
}
