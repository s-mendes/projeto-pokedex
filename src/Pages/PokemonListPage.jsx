import { useEffect } from 'react';
import Header from '../Components/Header/Header'
import PokemonCard from '../Components/PokemonCard/PokemonCard';

function PokemonListPage (props) {

    useEffect(() => {
        props.setAllPokemonsMenuVisible(false)
    }, []);
    
    return (
    <>
        <Header                         
            allPokemonsMenuVisible={props.allPokemonsMenuVisible}
        />
        <PokemonCard
            pokemons={props.pokemons}
            loading={props.loading}

        />
    </>
    )
}

export default PokemonListPage;