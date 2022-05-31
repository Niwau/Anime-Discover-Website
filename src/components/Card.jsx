import { Container } from "./Card.styled"

export const Card = (props) => (
  <Container>
    <img src={props.src}/>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </Container>
)
