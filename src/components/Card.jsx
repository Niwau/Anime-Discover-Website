import styled from "styled-components";

export const Card = (props) => (
  <Container>
    <img src={props.src}/>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </Container>
)

const Container = styled.div`

    width: 180px;
    transition: .2s ease;

    h1 {
        font-weight: 400;
        font-size: 1.5rem;
    }

    h2 {
        font-weight: 200;
    }

    img {
        width: 100%;
        border-radius: 15px;
    }

    :hover {
      transform: scale(1.05);
      cursor: pointer;
    }
`