import React from 'react'
import { RandomAnimeContext } from '../contexts/RandomAnimeContext';
import { Image } from './Cape.styled';

export default function Cape() {

  const [randomAnime, isLoaded] = React.useContext(RandomAnimeContext);

  return (
    <Image src={isLoaded ? randomAnime.images.jpg.large_image_url : ''} />
  )
}
