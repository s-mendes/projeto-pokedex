import React, { useEffect, useState } from 'react';
import { PokemonCard, PokemonId, PokemonName, PokemonTypes, PokemonDetails, PokemonImage, CaptureButton, Type, DeleteButton } from './PokemonStyle'
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../routes/coordinator'
import useUpperCase from '../../hooks/useUpperCase'

function Pokemon(props) {
    const { pokemon, setPokemonsPokedex, pokemonsPokedex, setCatchPokemon, setDeletePokemon } = props;
    const navigate = useNavigate();

    const [onPokedex, setOnPokedex] = useState(false);

    function capturePokemon() {
        setPokemonsPokedex([...pokemonsPokedex, pokemon])
        setCatchPokemon(true)
    }

    function deletePokemon() {
        const newPokedex = pokemonsPokedex.filter((pokemonPokedex) => pokemonPokedex.id !== pokemon.id)
        setPokemonsPokedex(newPokedex)
        setOnPokedex(false)
        setDeletePokemon(true)
    }

    useEffect(() => {
        pokemonsPokedex.map((pokemonPokedex) => {
            if (pokemon.id === pokemonPokedex.id) {
                setOnPokedex(true)
            }
        }), [pokemonsPokedex]
    })

    return (
        <>
            <PokemonCard typeBg={pokemon.types[0].type.name}>
                <div>
                    <PokemonId>
                        #{pokemon.id}
                    </PokemonId>
                    <PokemonName>
                        {useUpperCase(pokemon.name)}
                    </PokemonName>
                    <PokemonTypes>
                        {pokemon.types.map((type) => {
                            return (
                                <Type key={pokemon.id + type.type.name} typeName={type.type.name}>{useUpperCase(type.type.name)} </Type>
                            )
                        })}
                    </PokemonTypes>
                </div>
                <div>
                    <PokemonDetails onClick={() => goToDetailPage(navigate, props.pokeName)}>
                        Detalhes
                    </PokemonDetails>
                    <PokemonImage src={pokemon.sprites.other["official-artwork"].front_default} />
                    {onPokedex ?
                        (
                            <DeleteButton onClick={deletePokemon}>
                                Excluir
                            </DeleteButton>
                        ) :
                        (
                            <CaptureButton onClick={capturePokemon}>
                                Capturar!
                            </CaptureButton>
                        )}
                </div>
            </PokemonCard>


        </>
    )
}

export default Pokemon;