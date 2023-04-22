import React from 'react';
import Pokemon from '../Pokemon/Pokemon'
import { PokemonsContainer, CardsContainer } from './pokemonCardStyle'
import { ClipLoader } from 'react-spinners'

function PokemonCard(props) {
    const { pokemons, loading, setPokemonsPokedex, pokemonsPokedex } = props

    function renderPokemons() {
        return (
            <CardsContainer >
                {pokemons.map(pokemon => {
                    return (
                        <Pokemon
                            key={pokemon.data.id}
                            pokeName={pokemon.data.name}
                            pokemon={pokemon.data}
                            setPokemonsPokedex={setPokemonsPokedex}
                            pokemonsPokedex={pokemonsPokedex}
                            setCatchPokemon={props.setCatchPokemon}
                            setDeletePokemon={props.setDeletePokemon}
                        />
                    )
                })}
            </CardsContainer>
        )
    }

    return (
        <>
            <PokemonsContainer >
                <h1>
                    Todos os Pokemons
                </h1>
                {loading && <section><ClipLoader color="#fff" size="80px" /></section>}
                {loading || renderPokemons()}
            </PokemonsContainer>

        </>
    )
}

export default PokemonCard