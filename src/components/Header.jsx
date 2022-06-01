import React from 'react'
import styled from "styled-components";

export default function Header(props) {
  return (
    <Container>{props.children}</Container>
  )
}

const Container = styled.header`
    background: var(--black);
    width: 100%;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 var(--padding-right-left);
`
