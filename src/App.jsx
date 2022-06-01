import './App.css'
import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Banner from './components/Banner';
import Cape from './components/Cape';
import CapeInfo from './components/CapeInfo';
import { Main } from './components/Main';
import { Row } from './components/Row';
import { RandomAnimeContext }from './contexts/RandomAnimeContext'
import { useFetchRandomAnime } from './hooks/useFetchRandomAnime';
import { useFetchLastEpisodes } from './hooks/useFetchLastEpisodes'
import { Card } from './components/Card';
import { useFetchSeasonNow } from './hooks/useFetchSeasonNow';
import { useFetchEmBreve } from './hooks/useFetchEmBreve';
import { useFetchMaisFamosos } from './hooks/useFetchMaisFamosos';

export default function App() {

  const [lastEpisode, isLoadedLastEpisode] = useFetchLastEpisodes();
  const [seasonNow, isLoadedSeasonNow] = useFetchSeasonNow();
  const [emBreve, isLoadedEmBreve] = useFetchEmBreve();
  const [maisFamosos, isLoadedMaisFamosos] = useFetchMaisFamosos();

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
          {isLoadedLastEpisode && lastEpisode.map( item => <Card subtitle = {item.episodes[0].title} title = {item.entry.title} key = {item.entry.mal_id} src = {item.entry.images.jpg.large_image_url} /> )}
        </Row>

        <Row title = "Temporada atual">
          {isLoadedSeasonNow && seasonNow.map( item => <Card title = {item.title} subtitle = {item.title_english ? item.title_english : item.title} src = {item.images.jpg.large_image_url}/> )}
        </Row>

        <Row title = "Em breve">
          {isLoadedEmBreve && emBreve.map( item => <Card title = {item.title} subtitle = {item.title_english ? item.title_english : item.title} src = {item.images.jpg.large_image_url}/> )}
        </Row>

        <Row title = "Mais famosos">
          {isLoadedMaisFamosos && maisFamosos.map( item => <Card title = {item.title} subtitle = {item.title_english ? item.title_english : item.title} src = {item.images.jpg.large_image_url}/> )}
        </Row>

      </Main>
    </div>
  )
}