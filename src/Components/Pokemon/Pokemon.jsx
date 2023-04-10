import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { PokemonCard, PokemonId, PokemonName, PokemonTypes, PokemonDetails, PokemonImage, CaptureButton, Type } from './PokemonStyle'
import { useNavigate } from 'react-router-dom';

function Pokemon(props) {
    const [pokemonId, setPokemonId] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [mainType, setMainType] = useState([]);
    const [load, setLoad] = useState(false)
    const navigate = useNavigate();

    async function getPokemon() {
        try {
            setLoad(true)
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}/`);
            setPokemonId(response.data.id)
            setPokemonImage(response.data.sprites.other["official-artwork"].front_default);
            setPokemonType(response.data.types)
            setMainType(response.data.types[0].type.name)
            setLoad(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemon()
        setPokemonName(() => upperCase(props.pokeName));
    }, []);

    function upperCase(str) {
        const newStr = str[0].toUpperCase() + str.substr(1);
        return newStr
    }
    
    function goToDetailPage (pokemonName) {
        navigate(`/detail/${pokemonName}`);
    }

    return (
        <>

            {load ? (<p></p>):
            (<PokemonCard typeBg={mainType}>
                <div>
                    <PokemonId>
                        #{pokemonId}
                    </PokemonId>
                    <PokemonName>
                        {pokemonName}
                    </PokemonName>
                    <PokemonTypes>
                        {pokemonType.map((type) => {
                            return (
                            <Type key={pokemonId + type.type.name} typeName={type.type.name}>{upperCase(type.type.name)} </Type>
                            )})}
                    </PokemonTypes>
                </div>
                <div>
                <PokemonDetails onClick={() => goToDetailPage(props.pokeName)}>
                        Detalhes
                    </PokemonDetails>
                    <PokemonImage src={pokemonImage} />
                    <CaptureButton>
                        Capturar!
                    </CaptureButton>
                </div>
            </PokemonCard>)}
            
            
        </>
    )
}

export default Pokemon;