import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonListPage from "../Pages/PokemonListPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                 <Route index element = { <PokemonListPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;