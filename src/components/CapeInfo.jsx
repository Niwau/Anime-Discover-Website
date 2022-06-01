import React from 'react'
import styled from 'styled-components';
import { RandomAnimeContext } from '../contexts/RandomAnimeContext'

export default function CapeInfo() {

    const [randomAnime, isLoaded] = React.useContext(RandomAnimeContext);
    
    return (
        <Container>
            <h1>{isLoaded && randomAnime.title}</h1>
            <h2>{isLoaded ? randomAnime.title_english : randomAnime.title}</h2>
            <p>{isLoaded && randomAnime.synopsis}</p>
            <div><button>Detalhes</button></div>
        </Container>
  )
}

const Container = styled.div`

    color: var(--white);

    width: 630px;
    flex: 1;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 200;
    }

    p {
        margin-top: 20px;
        font-size: 1.5rem;
        font-weight: 200;
    }

    button {
        margin-top: 20px;
        padding: 20px 50px;
        border: 2px solid var(--white);
        background: none;
        color: white;
        border-radius: 15px;
    }

`