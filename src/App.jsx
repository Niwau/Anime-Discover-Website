import Header from './components/Header/Header'
import './App.css'
import Search from './components/Header/Search/Input'
import Banner from './components/Banner/Banner'
import Cape from './components/Banner/Cape/Cape'

export default function App() {

  return (
    <div className="App">
      <Header>
        <Search/>
      </Header>

      <Banner>
        <Cape src="test"/>
      </Banner>
    </div>
  )
}