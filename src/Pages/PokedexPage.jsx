import { useEffect } from 'react';
import Header from '../Components/Header/Header'
import Pokedex from '../Components/Pokedex/Pokedex'
import Footer from '../Components/Footer/Footer'
import Catch from '../Components/CatchAndDelete/Catch'
import Delete from '../Components/CatchAndDelete/Delete'
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

function PokedexPage() {

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
        setAllPokemonsMenuVisible(true)
        setPokedexMenu(false)
        setOnDetailPage(false)
    }, []);

    return (
        <>
            <Header
                allPokemonsMenuVisible={allPokemonsMenuVisible}
                pokedexMenu={pokedexMenu}
                onDetailPage={onDetailPage}
            />
            <Pokedex
                pokemonsPokedex={pokemonsPokedex}
                setPokemonsPokedex={setPokemonsPokedex}
                pokemons={pokemons}
                loading={loading}
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
            <Footer />
        </>
    )
}

export default PokedexPage