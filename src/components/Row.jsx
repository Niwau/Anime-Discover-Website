import styled from "styled-components";

export const Row = (props) => (
    <>
        <Title>{props.title}</Title>
        <Container>
            {props.children}
        </Container>
    </>
)

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin: 10px var(--padding-right-left);
    color: var(--white);
`
const Title = styled.h1`
    margin: 0 var(--padding-right-left) ;
    margin-top: 10px;
    color: var(--white);
    font-weight: 500;
`
