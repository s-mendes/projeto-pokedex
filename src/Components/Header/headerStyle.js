import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

export const Logo = styled.img`
    justify-self: center;
`

export const AllPokemons = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #1A1A1A;
    opacity: 0;
    pointer-events: none;
    ${({allPokemonsMenuVisible}) => allPokemonsMenuVisible && `
        opacity: 1;
        pointer-events: auto;
    `}
    > svg {
        transform: translate(0%, 17%);
    }
    :hover {
        cursor: pointer;
    }
`

export const PokedexButton = styled.button`
    width: 290px;
    justify-self: flex-end;
    padding: 1rem 4rem;
    background: #33A4F5;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #FFFFFF;
    cursor: pointer;
`

export const DeleteButton = styled.button`
    width: 280px;
    justify-self: flex-end;
    padding: 1rem 4rem;
    background: #FF6262;
    border-radius: 8px;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
`