import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonListPage from "../Pages/PokemonListPage";
import PokedexPage from '../Pages/PokedexPage';
import PokemonDetailPage from "../Pages/PokemonDetailPage";
import { useEffect, useState } from 'react';
import { getPokemons, getPokemonData } from '../API/pokemonAPI'

function Router() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pokemonsPokedex, setPokemonsPokedex] = useState("");

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



    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <PokemonListPage
                        loading={loading}
                        pokemons={pokemons}
                    />} />
                <Route path={'/pokedex'} element={<PokedexPage />} />
                <Route path={'/detail/:pokemonName'} element={
                    <PokemonDetailPage
                        loading={loading}
                        pokemons={pokemons}
                    />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;