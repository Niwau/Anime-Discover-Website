import React from 'react'
import styled from "styled-components";

export default function Search() {
  return <Container placeholder='Pesquisar' type="text" name="" id=""/>
}

const Container = styled.input`
    width: 450px;
    height: 40px;
    outline: none;
    border: 2px solid var(--white);
    color: var(--white);
    padding-left: 10px;
    border-radius: 15px;
    background: none;
`