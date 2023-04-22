import React from 'react';
import Pokemon from '../Pokemon/Pokemon'
import { ClipLoader } from 'react-spinners'
import { PokemonsContainer, CardsContainer } from './PokedexStyle'



function Pokedex(props) {
    const { loading, pokemonsPokedex, pokemons, setPokemonsPokedex } = props

    function renderPokemons() {
        return (
            <CardsContainer >
                {pokemonsPokedex.map(pokemon => {
                    return (
                        <Pokemon
                            key={pokemon.id}
                            pokeName={pokemon.name}
                            pokemon={pokemon}
                            setPokemonsPokedex={setPokemonsPokedex}
                            pokemonsPokedex={pokemonsPokedex}
                            setCatchPokemon={props.setCatchPokemon}
                            setDeletePokemon={props.setDeletePokemon}
                        />)
                })}
            </CardsContainer>
        )
    }
    return (
        <PokemonsContainer>
            <h1>
                Meus Pokemons
            </h1>
            {loading && <section><ClipLoader color="#fff" size="80px" /></section>}
            {loading || renderPokemons()}
        </PokemonsContainer>
    )
}

export default Pokedex;