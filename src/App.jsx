import React from 'react';
import Header from './components/Header/Header'
import Search from './components/Header/Search/Search'
import Banner from './components/Banner/Banner'
import Cape from './components/Banner/Cape/Cape'
import { RandomAnimeContext }from './contexts/RandomAnimeContext'
import { useFetchRandomAnime } from './hooks/useFetchRandomAnime';

import './App.css'
import CapeInfo from './components/Banner/CapeInfo/CapeInfo';

export default function App() {

  return (
    <div className="App">
      <Header>
        <Search/>
      </Header>
  
      <Banner>
        <RandomAnimeContext.Provider value={useFetchRandomAnime()}>
          <Cape/>
          <CapeInfo/>
        </RandomAnimeContext.Provider>
      </Banner>
    </div>
  )
}