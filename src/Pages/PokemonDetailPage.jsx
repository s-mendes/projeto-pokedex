import Header from '../Components/Header/Header';
import PokemonDetail from '../Components/PokemonDetail/PokemonDetail';
import { useParams } from 'react-router-dom';

function PokemonDetailPage () {
    const pathParams = useParams();
    return (
        <>
            <Header />
            <PokemonDetail pokemonName={pathParams.pokemonName} />
        </>
    )
}

export default PokemonDetailPage