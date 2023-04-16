import React from 'react';
import { PokemonCard, PokemonId, PokemonName, PokemonTypes, PokemonDetails, PokemonImage, CaptureButton, Type } from './PokemonStyle'
import { useNavigate } from 'react-router-dom';
import { goToDetailPage } from '../../routes/coordinator'
import useUpperCase from '../../hooks/useUpperCase'

function Pokemon(props) {
    const { pokemon } = props;
    const navigate = useNavigate();

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
                    <CaptureButton>
                        Capturar!
                    </CaptureButton>
                </div>
            </PokemonCard>


        </>
    )
}

export default Pokemon;