import React from 'react'
import { RandomAnimeContext } from '../../../contexts/RandomAnimeContext'
import { Container } from './CapeInfo.styled';

export default function CapeInfo() {

    const [randomAnime, isLoaded] = React.useContext(RandomAnimeContext);
    
    return (
        <Container>
            <h1>{isLoaded ? randomAnime.title : "Carregando..."}</h1>
            <h2>{isLoaded ? randomAnime.title_english : randomAnime.title}</h2>
            <p>{isLoaded ? randomAnime.synopsis : "Carregando..."}</p>
            <button>Detalhes</button>
        </Container>
  )
}
