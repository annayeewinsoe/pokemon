import React from 'react'

export default function PokemonList(props) {
   const { pokemon } = props

   return (
      <div id="pokemon-list">
         {pokemon.map(p => (
            <div key={p}>{p}</div>
         ))}
      </div>
   )
}
