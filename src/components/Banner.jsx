import React from 'react'
import styled from "styled-components";


export default function Banner(props) {
    return <Container>{props.children}</Container>
}

const Container = styled.div`
    padding: 25px var(--padding-right-left);
    background: var(--blue);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`
