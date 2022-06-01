import React from 'react'
import styled from 'styled-components';
import { RandomAnimeContext } from '../contexts/RandomAnimeContext';

export default function Cape() {

  const [randomAnime, isLoaded] = React.useContext(RandomAnimeContext);

  return (
    <Image src={isLoaded ? randomAnime.images.jpg.large_image_url : "Carregando..." } />
  )
}

const Image = styled.img`
    border-radius: 15px;
    height: 500px;
`
