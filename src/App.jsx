import './App.css'
import React from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Banner from './components/Banner';
import Cape from './components/Cape';
import CapeInfo from './components/CapeInfo';
import { Main } from './components/Main';
import { Row } from './components/Row';
import { Card } from './components/Card';
import { RandomAnimeContext }from './contexts/RandomAnimeContext'
import { useFetchRandomAnime } from './hooks/useFetchRandomAnime';
import { useFetchLastEpisodes } from './hooks/useFetchLastEpisodes';

export default function App() {

  const [lastEpisode, isLoaded] = useFetchLastEpisodes();

  return (
    <div className="App">
      <Header>
        <Search/>
      </Header>
  
      <RandomAnimeContext.Provider value={useFetchRandomAnime()}>
        <Banner>
            <Cape/>
            <CapeInfo/>
        </Banner>
      </RandomAnimeContext.Provider>   

      <Main>
        <Row title = "Últimos episódios">

          

        </Row>

      </Main>
    </div>
  )
}