import { useEffect } from 'react';
import Header from '../Components/Header/Header';
import PokemonDetail from '../Components/PokemonDetail/PokemonDetail';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import Catch from '../Components/CatchAndDelete/Catch'
import Delete from '../Components/CatchAndDelete/Delete'

function PokemonDetailPage() {

    const {
        setAllPokemonsMenuVisible,
        setPokedexMenu,
        setOnDetailPage,
        allPokemonsMenuVisible,
        pokedexMenu,
        onDetailPage,
        pokemons,
        loading,
        catchPokemon,
        setCatchPokemon,
        deletePokemon,
        setDeletePokemon
    } = useContext(GlobalContext)

    const pathParams = useParams();

    useEffect(() => {
        setAllPokemonsMenuVisible(true)
        setPokedexMenu(false)
        setOnDetailPage(true)
    }, []);
    return (
        <>
            <Header
                allPokemonsMenuVisible={allPokemonsMenuVisible}
                pokedexMenu={pokedexMenu}
                onDetailPage={onDetailPage}
            />
            <PokemonDetail
                pokemonName={pathParams.pokemonName}
                pokemons={pokemons}
                loading={loading}
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

export default PokemonDetailPage