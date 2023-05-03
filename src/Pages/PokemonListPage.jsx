import { useEffect } from 'react';
import Header from '../Components/Header/Header'
import PokemonCard from '../Components/PokemonCard/PokemonCard';
import Catch from '../Components/CatchAndDelete/Catch'
import Delete from '../Components/CatchAndDelete/Delete'
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

function PokemonListPage () {

    const { 
        setAllPokemonsMenuVisible, 
        setPokedexMenu, 
        setOnDetailPage, 
        allPokemonsMenuVisible, 
        pokedexMenu, 
        pokemonsPokedex,
        onDetailPage,
        setPokemonsPokedex,
        pokemons,
        loading,
        setCatchPokemon,
        setDeletePokemon,
        catchPokemon,
        deletePokemon
    } = useContext(GlobalContext)

    useEffect(() => {
        setAllPokemonsMenuVisible(false)
        setPokedexMenu(true)
        setOnDetailPage(false)
    }, []);
    
    return (
    <>
        <Header                         
            allPokemonsMenuVisible={allPokemonsMenuVisible}
            pokedexMenu={pokedexMenu}
            onDetailPage={onDetailPage}
        />
        <PokemonCard
            pokemons={pokemons}
            loading={loading}
            pokemonsPokedex={pokemonsPokedex}
            setPokemonsPokedex={setPokemonsPokedex}
            setCatchPokemon={setCatchPokemon}
            setDeletePokemon={setDeletePokemon}
        />
        <Catch 
            catchPokemon={catchPokemon}
            setCatchPokemon={setCatchPokemon}
        />
        <Delete 
            deletePokemon={deletePokemon}
            setDeletePokemon={setDeletePokemon}
        />
    </>
    )
}

export default PokemonListPage;