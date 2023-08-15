import { useEffect } from 'react'
import { getPokemon, getPokemonsDetails } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'antd'
import logo from './assets/logo.svg'
import './App.css'

import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { getPokemonsWithDetails, setPokemons } from './actions'

function App() {

  const Pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon()
      dispatch(getPokemonsWithDetails(pokemonsRes))
    }
    fetchPokemon()
  }, [])
  
  return (
    <>
      <div className='App'>

        <Col span={4} offset={10}>
          <img src={logo} alt='pokedux' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        <PokemonList pokemons={Pokemons} />
      </div>
    </>
  )
}



export default App
