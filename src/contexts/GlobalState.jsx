import GlobalContext from "./GlobalContext";
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonData } from '../API/pokemonAPI'

function GlobalState(props) {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allPokemonsMenuVisible, setAllPokemonsMenuVisible] = useState(false)
    const [pokemonsPokedex, setPokemonsPokedex] = useState(localStorage.getItem('pokedex') ? JSON.parse(localStorage.getItem('pokedex')) : []);
    const [pokedexMenu, setPokedexMenu] = useState(true)
    const [onDetailPage, setOnDetailPage] = useState(false)
    const [catchPokemon, setCatchPokemon] = useState(false)
    const [deletePokemon, setDeletePokemon] = useState(false)
    const [onPokedex, setOnPokedex] = useState(false)

    async function getAllPokemonsData() {
        try {
            setLoading(true);
            const pokemons = await getPokemons();
            const promises = pokemons.data.results.map(async (pokemon) => {
                return await getPokemonData(pokemon.url);
            });
            const result = await Promise.all(promises);
            setPokemons(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllPokemonsData();
    }, [Promise]);

    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokemonsPokedex));
    }, [pokemonsPokedex]);

    const data = {
        pokemons,
        setPokemons,
        loading,
        setLoading,
        allPokemonsMenuVisible,
        setAllPokemonsMenuVisible,
        pokemonsPokedex,
        setPokemonsPokedex,
        pokedexMenu,
        setPokedexMenu,
        onDetailPage,
        setOnDetailPage,
        catchPokemon,
        setCatchPokemon,
        deletePokemon,
        setDeletePokemon,
    }

    return (
        <>
            <GlobalContext.Provider value={data}>
                {props.children}
            </GlobalContext.Provider>
        </>
    )
}

export default GlobalState