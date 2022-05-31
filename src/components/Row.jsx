import { Container, Title } from "./Row.styled";


export const Row = (props) => (

    <>
        <Title>{props.title}</Title>
        <Container>
            {props.children}
        </Container>
    </>

)