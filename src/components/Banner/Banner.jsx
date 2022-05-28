import React from 'react'
import { Container } from './Banner.styled'

export default function Banner(props) {

    const [data, setData] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    return <Container>{props.children}</Container>
}
