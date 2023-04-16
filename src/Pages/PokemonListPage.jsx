import Header from '../Components/Header/Header'
import PokemonCard from '../Components/PokemonCard/PokemonCard';

function PokemonListPage (props) {
    
    return (
    <>
        <Header />
        <PokemonCard
            pokemons={props.pokemons}
            loading={props.loading}
        />
    </>
    )
}

export default PokemonListPage;