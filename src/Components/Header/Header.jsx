import logo from '/logo.png';
import { HeaderContainer, Logo, AllPokemons, PokedexButton, DeleteButton } from './headerStyle'
import { IoChevronBackSharp } from "react-icons/io5";
import { goToHome, goToPokedex } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate()
    console.log(props.onDetailPage)


    function renderPokedexButton() {
        return (
            <PokedexButton
                onClick={() => goToPokedex(navigate)}
            >
                Pokedex
            </PokedexButton>
        )
    }

    function renderCaptureDeleteButton() {
        return (
            <DeleteButton>Excluir da Pokedex</DeleteButton>
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
            {props.onDetailPage && renderCaptureDeleteButton()}
        </HeaderContainer>
    )
}

export default Header;