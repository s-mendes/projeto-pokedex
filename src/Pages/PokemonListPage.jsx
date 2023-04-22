import { useEffect } from 'react';
import Header from '../Components/Header/Header'
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import Catch from '../Components/CatchAndDelete/Catch'
import Delete from '../Components/CatchAndDelete/Delete'

function PokemonListPage (props) {

    useEffect(() => {
        props.setAllPokemonsMenuVisible(false)
        props.setPokedexMenu(true)
        props.setOnDetailPage(false)
    }, []);
    
    return (
    <>
        <Header                         
            allPokemonsMenuVisible={props.allPokemonsMenuVisible}
            pokedexMenu={props.pokedexMenu}
            onDetailPage={props.onDetailPage}
        />
        <PokemonCard
            pokemons={props.pokemons}
            loading={props.loading}
            pokemonsPokedex={props.pokemonsPokedex}
            setPokemonsPokedex={props.setPokemonsPokedex}
            setCatchPokemon={props.setCatchPokemon}
            setDeletePokemon={props.setDeletePokemon}
        />
        <Catch 
            catchPokemon={props.catchPokemon}
            setCatchPokemon={props.setCatchPokemon}
        />
        <Delete 
            deletePokemon={props.deletePokemon}
            setDeletePokemon={props.setDeletePokemon}
        />
    </>
    )
}

export default PokemonListPage;