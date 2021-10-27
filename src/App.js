import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './pokemon.png'
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false)
      setPrevPageUrl(res.data.previous)
      setNextPageUrl(res.data.next)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  const display = () => {
    if(loading) return <h2>Loading...</h2>
    return(
      <>
        <PokemonList pokemon={pokemon} />
        <Pagination
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
        />
      </>
    )
  }

  return(
    <div className="App">
      <img src={logo} alt="pokemon" />
      {display()}
    </div>
  )
}

