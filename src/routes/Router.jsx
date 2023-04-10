import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonListPage from "../Pages/PokemonListPage";
import PokedexPage from '../Pages/PokedexPage';
import PokemonDetailPage from "../Pages/PokemonDetailPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route index element = { <PokemonListPage /> } />
                 <Route path={'/pokedex'} element={ <PokedexPage /> } />
                 <Route path={'/detail/:pokemonName'} element={ <PokemonDetailPage /> } />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;