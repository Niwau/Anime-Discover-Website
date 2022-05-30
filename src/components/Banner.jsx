import React from 'react'
import { Container } from './Banner.styled'

export default function Banner(props) {
    return <Container>{props.children}</Container>
}
