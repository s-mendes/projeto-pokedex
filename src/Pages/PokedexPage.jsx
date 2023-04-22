import { useEffect } from 'react';
import Header from '../Components/Header/Header'
import Pokedex from '../Components/Pokedex/Pokedex'
import Footer from '../Components/Footer/Footer'
import Catch from '../Components/CatchAndDelete/Catch'
import Delete from '../Components/CatchAndDelete/Delete'

function PokedexPage(props) {

    useEffect(() => {
        props.setAllPokemonsMenuVisible(true)
        props.setPokedexMenu(false)
        props.setOnDetailPage(false)
    }, []);

    return (
        <>
            <Header
                allPokemonsMenuVisible={props.allPokemonsMenuVisible}
                pokedexMenu={props.pokedexMenu}
                onDetailPage={props.onDetailPage}
            />
            <Pokedex
                pokemonsPokedex={props.pokemonsPokedex}
                setPokemonsPokedex={props.setPokemonsPokedex}
                pokemons={props.pokemons}
                loading={props.loading}
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
            <Footer />
        </>
    )
}

export default PokedexPage