import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Pokemon from '../Pokemon/Pokemon'
import { PokemonsContainer, CardsContainer } from './pokemonCardStyle'
import { BASE_URL } from '../../constants/constants';

function PokemonCard() {

    const [pokemons, setPokemons] = useState([]);

    async function getPokemons() {
        try {
            const response = await axios.get(`${BASE_URL}?limit=151&offset=0`)
            setPokemons(response.data.results)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemons()
    }, []);

    return (
        <>
            <PokemonsContainer>
                <h1>
                    Todos os Pokemons
                </h1>
                <CardsContainer >
                    {pokemons.map(pokemon => <Pokemon key={pokemon.url} pokeName={pokemon.name} />)}
                </CardsContainer>
            </PokemonsContainer>

        </>
    )
}

export default PokemonCard