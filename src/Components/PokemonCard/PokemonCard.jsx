import React  from 'react';
import Pokemon from '../Pokemon/Pokemon'
import { PokemonsContainer, CardsContainer } from './pokemonCardStyle'

function PokemonCard(props) {
    const { pokemons }  = props

    return (
        <>
            <PokemonsContainer>
                <h1>
                    Todos os Pokemons
                </h1>
                <CardsContainer >
                    {pokemons.map(pokemon => <Pokemon key={pokemon.data.id} pokeName={pokemon.data.name} pokemon={pokemon.data}/>)}
                </CardsContainer>
            </PokemonsContainer>

        </>
    )
}

export default PokemonCard