import styled from 'styled-components';

export const PokemonsContainer = styled.div`
    background-color: #5E5E5E;
    color: white;
    h1 {
        padding: 2rem 15px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 72px;
        color: #FFFFFF;
    }
    section {
            height: 75vh;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translate(0%, -10%);
    }

`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 60px 20px;
    
`