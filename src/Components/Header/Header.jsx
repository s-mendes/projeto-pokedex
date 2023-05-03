import logo from '/logo.png';
import { HeaderContainer, Logo, AllPokemons, PokedexButton, DeleteButton } from './headerStyle'
import { IoChevronBackSharp } from "react-icons/io5";
import { goToHome, goToPokedex } from '../../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

function Header(props) {

    const { 
        pokemonsPokedex,
        setPokemonsPokedex,
        setDeletePokemon,
        pokemons,
        setCatchPokemon
    } = useContext(GlobalContext)

    const location = useLocation();
    const navigate = useNavigate()

    function onPokedex () {
        const onPokedex = pokemonsPokedex.find((pokemon) => location.pathname.includes(pokemon.name))
        if (onPokedex) {
            return true
        } else {
            return false
        }
    }

    function capturePokemon() {
        const pokemon = pokemons.find((pokemon) => location.pathname.includes(pokemon.data.name))
        setPokemonsPokedex([...pokemonsPokedex, pokemon.data])
        setCatchPokemon(true)
    }

    function deletePokemon() {
        const pokemon = pokemons.find((pokemon) => location.pathname.includes(pokemon.data.name))
        const newPokedex = pokemonsPokedex.filter((pokemonPokedex) => pokemonPokedex.id !== pokemon.data.id)
        setPokemonsPokedex(newPokedex)
        setDeletePokemon(true)
    }

    function renderPokedexButton() {
        return (
            <PokedexButton
                onClick={() => goToPokedex(navigate)}
            >
                Pokedex
            </PokedexButton>
        )
    }

    function renderCaptureButton() {
        return (
            <PokedexButton onClick={capturePokemon}>Capturar!</PokedexButton>
        )
    }

    function renderCaptureDeleteButton() {
        return (
            <DeleteButton onClick={deletePokemon}>Excluir da Pokedex</DeleteButton>
        )
    }

    return (
        <HeaderContainer>
            <AllPokemons
                onClick={() => goToHome(navigate)}
                allPokemonsMenuVisible={props.allPokemonsMenuVisible}
            ><IoChevronBackSharp /> <u>Todos os Pokemons</u></AllPokemons>
            <Logo src={logo} alt="" />
            {props.pokedexMenu && renderPokedexButton()}
            {props.onDetailPage && !onPokedex() && renderCaptureButton()}
            {props.onDetailPage && onPokedex() && renderCaptureDeleteButton()}
        </HeaderContainer>
    )
}

export default Header;