import logo from '/logo.png';
import { HeaderContainer, Logo, AllPokemons, PokedexButton } from './headerStyle'
import { IoChevronBackSharp } from "react-icons/io5";
import { goToHome } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate()

    console.log(props)
    return (
        <HeaderContainer>
            <AllPokemons 
                onClick={() => goToHome(navigate)}
                allPokemonsMenuVisible={props.allPokemonsMenuVisible}
            ><IoChevronBackSharp /> <u>Todos os Pokemons</u></AllPokemons>
            <Logo src={logo} alt="" />
            <PokedexButton>Pokedex</PokedexButton>
        </HeaderContainer>
    )
}

export default Header;