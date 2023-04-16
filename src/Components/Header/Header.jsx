import logo from '/logo.png';
import { HeaderContainer, Logo } from './headerStyle'

function Header() {


    return (
        <HeaderContainer>
            <Logo src={logo} alt="" />
        </HeaderContainer>
    )
}

export default Header;