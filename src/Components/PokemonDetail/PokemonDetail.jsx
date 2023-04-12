import { CardContainer, ImgsContainer, StatusContainer, PokemonInfoContainer, Infos, Moves, PokemonImage, Card, PokemonId, PokemonName, PokemonTypes, Type } from './PokemonDetailStyle'
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/constants';
import { useState, useEffect } from 'react';
import useUpperCase from '../../hooks/useUpperCase'

function PokemonDetail(props) {
    const { pokemonName } = props;
    const [ pokemon, pokemonLoading, pokemonError ] = useRequestData(`${BASE_URL}/${pokemonName}`)
    const [ pokemonImage, setPokemonImage ] = useState([])
    const [ images, setImages ] = useState([])
    const [ mainType, setMainType ] = useState([])
    const [ pokemonId, setPokemonId ] = useState([])
    const [pokemonType, setPokemonType] = useState([]);

    useEffect(() => {
        pokemon && setPokemonImage(pokemon.sprites.other["official-artwork"].front_default)
        pokemon && setImages([pokemon.sprites.front_default, pokemon.sprites.back_default])
        pokemon && setMainType(pokemon.types[0].type.name)
        pokemon && setPokemonId(pokemon.id)
        pokemon && setPokemonType(pokemon.types)
    }, [pokemon]);

    return (
        <CardContainer>
            <h1>Detalhes</h1>
            <Card typeBg={mainType}>
                <ImgsContainer images={images}>
                    <div>
                       <img src={images[0]} />
                    </div>
                    <div>
                    <img src={images[1]} />
                    </div>
                </ImgsContainer>
                <StatusContainer>

                </StatusContainer>
                <PokemonInfoContainer>
                    <Infos>
                        <PokemonId>#{pokemonId}</PokemonId>
                        <PokemonName>{useUpperCase(pokemonName)}</PokemonName>
                        <PokemonTypes>
                        {pokemonType.map((type) => {
                            return (
                            <Type key={pokemonId + type.type.name} typeName={type.type.name}>{useUpperCase(type.type.name)} </Type>
                            )})}
                        </PokemonTypes>
                    </Infos>
                    <Moves>
                        <h2>Moves:</h2>
                        <span>{pokemon && useUpperCase(pokemon.moves[0].move.name)}</span>
                        <span>{pokemon && useUpperCase(pokemon.moves[1].move.name)}</span>
                        <span>{pokemon && useUpperCase(pokemon.moves[2].move.name)}</span>
                        <span>{pokemon && useUpperCase(pokemon.moves[3].move.name)}</span>
                    </Moves>
                </PokemonInfoContainer>
                <PokemonImage src={pokemonImage}/>
            </Card>
        </CardContainer>
    )
}

export default PokemonDetail;