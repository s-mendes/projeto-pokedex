import { useEffect } from 'react';
import Header from '../Components/Header/Header';
import PokemonDetail from '../Components/PokemonDetail/PokemonDetail';
import { useParams } from 'react-router-dom';

function PokemonDetailPage (props) {
    const pathParams = useParams();
    useEffect(() => {
        props.setAllPokemonsMenuVisible(true)
    }, []);
    return (
        <>
            <Header                 
                allPokemonsMenuVisible={props.allPokemonsMenuVisible}
            />
            <PokemonDetail 
                pokemonName={pathParams.pokemonName} 
                pokemons={props.pokemons}
                loading={props.loading}
            />
        </>
    )
}

export default PokemonDetailPage