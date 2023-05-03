import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonListPage from "../Pages/PokemonListPage";
import PokedexPage from '../Pages/PokedexPage';
import PokemonDetailPage from "../Pages/PokemonDetailPage";
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonData } from '../API/pokemonAPI'

function Router() {
    const [ pokemons, setPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ allPokemonsMenuVisible, setAllPokemonsMenuVisible ] = useState(false)
    const [ pokemonsPokedex, setPokemonsPokedex ] = useState(localStorage.getItem('pokedex') ? JSON.parse(localStorage.getItem('pokedex')) : []);
    const [ pokedexMenu, setPokedexMenu ] = useState(true)
    const [ onDetailPage, setOnDetailPage ] = useState(false)
    const [ catchPokemon, setCatchPokemon ] = useState(false)
    const [ deletePokemon, setDeletePokemon ] = useState(false)

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

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <PokemonListPage
                        loading={loading}
                        pokemons={pokemons}
                        allPokemonsMenuVisible={allPokemonsMenuVisible}
                        setAllPokemonsMenuVisible={setAllPokemonsMenuVisible}
                        setPokemonsPokedex={setPokemonsPokedex}
                        pokemonsPokedex={pokemonsPokedex}
                        setPokedexMenu={setPokedexMenu}
                        pokedexMenu={pokedexMenu}
                        onDetailPage={onDetailPage}
                        setOnDetailPage={setOnDetailPage}
                        catchPokemon={catchPokemon}
                        setCatchPokemon={setCatchPokemon}
                        deletePokemon={deletePokemon}
                        setDeletePokemon={setDeletePokemon}
                    />} />
                <Route path={'/pokedex'} element={
                    <PokedexPage 
                        allPokemonsMenuVisible={allPokemonsMenuVisible}
                        setAllPokemonsMenuVisible={setAllPokemonsMenuVisible}
                        pokemonsPokedex={pokemonsPokedex}
                        setPokemonsPokedex={setPokemonsPokedex}
                        loading={loading}
                        pokemons={pokemons}
                        setPokedexMenu={setPokedexMenu}
                        pokedexMenu={pokedexMenu}
                        onDetailPage={onDetailPage}
                        setOnDetailPage={setOnDetailPage}
                        catchPokemon={catchPokemon}
                        setCatchPokemon={setCatchPokemon}
                        deletePokemon={deletePokemon}
                        setDeletePokemon={setDeletePokemon}
                    />} />
                <Route path={'/detail/:pokemonName'} element={
                    <PokemonDetailPage
                        loading={loading}
                        pokemons={pokemons}
                        allPokemonsMenuVisible={allPokemonsMenuVisible}
                        setAllPokemonsMenuVisible={setAllPokemonsMenuVisible}
                        setPokedexMenu={setPokedexMenu}
                        pokedexMenu={pokedexMenu}
                        pokemonsPokedex={pokemonsPokedex}
                        onDetailPage={onDetailPage}
                        setOnDetailPage={setOnDetailPage}
                    />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;