import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #5E5E5E;
    height: 100vh;
    background-image: url('./pngwing1.png');
    background-repeat: no-repeat;
    background-position: center ;
    h1 {
        padding: 3.5rem 3rem;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        color: #FFFFFF;
    }
`

export const Card = styled.div`
    background: #729F92;
    border-radius: 38px;
    margin: 0 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ImgsContainer = styled.div`
    div {
        width: 282px;
        height: 282px;
        background: url(image.png), #FFFFFF;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        margin: 26px 35px;
    }
`

export const StatusContainer = styled.div`
    background: #FFFFFF;
    border-radius: 12px;
    width: 343px;
    height: 613px;
    margin: 26px 0;
`

export const PokemonInfoContainer = styled.div`

`

export const Infos = styled.div`

`

export const Moves = styled.div`

`

export const PokemonImage = styled.img`

`