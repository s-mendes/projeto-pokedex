import styled from 'styled-components';

export const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => {
        switch (props.typeBg) {
            case "grass":
                return "#729F92;"
            case "fire":
                return "#EAAB7D;"
            case "water":
                return "#71C3FF;"
            case "bug":
                return "#76A866;"
            case "normal":
                return "#BF9762;"
            case "dragon":
                return "#004170;"
            case "electric":
                return "#d7bb40;"
            case "poison":
                return "#641365;"
            case "ground":
                return "#65371f;"
            case "fairy":
                return "#b263ad;"
            case "fighting":
                return "#752d42;"
            case "psychic":
                return "#a50006;"
            case "rock":
                return "#a28943;"
            case "ghost":
                return "#0b2369;"
            case "ice":
                return "#046f5e;"
            case "dark":
                return "#5C5365;"
            case "flying":
                return "#6892B0;"
            case "steel":
                return "#BBBBBB;"

            default:
                break;
        }
    }};
    border-radius: 12px;
    padding: 26px;
    width: 440px;
    height: 210px;
    background-image: url('./pngwing.png');
    background-repeat: no-repeat;
    background-position: right top;
    div:first-child{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    div:nth-child(2){
        display: flex;
        flex-direction: row;
        width: 50px;
    }
`

export const PokemonId = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`

export const PokemonName = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
`

export const PokemonTypes = styled.div`
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;
`

export const Type = styled.span`
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: 7px, center;
    background-color: ${(props) => {
        switch (props.typeName) {
            case "grass":
                return "#70B873;"
            case "fire":
                return "#F44900;"
            case "water":
                return "#33A4F5;"
            case "bug":
                return "#316520;"
            case "normal":
                return "#8A8A8A;"
            case "dragon":
                return "#0A6CBF;"
            case "electric":
                return "#F4D23B;"
            case "poison":
                return "#AD61AE;"
            case "ground":
                return "#D97745;"
            case "fairy":
                return "#EC8FE6;"
            case "fighting":
                return "#CE4069;"
            case "psychic":
                return "#F67176;"
            case "rock":
                return "#C7B78B;"
            case "ghost":
                return "#5269AC;"
            case "ice":
                return "#74CEC0;"
            case "dark":
                return "#5C5365;"
            case "flying":
                return "#6892B0;"
            case "steel":
                return "#BBBBBB;"

            default:
                break;
        }
    }};
    background-image: ${(props) => {
        switch (props.typeName) {
            case "grass":
                return "url('./type/grass.png');"
            case "fire":
                return "url('./type/fire.png');"
            case "water":
                return "url('./type/water.png');"
            case "bug":
                return "url('./type/bug.png');"
            case "normal":
                return "url('./type/normal.png');"
            case "dragon":
                return "url('./type/dragon.png');"
            case "electric":
                return "url('./type/electric.png');"
            case "poison":
                return "url('./type/poison.png');"
            case "ground":
                return "url('./type/ground.png');"
            case "fairy":
                return "url('./type/fairy.png');"
            case "fighting":
                return "url('./type/fighting.png');"
            case "psychic":
                return "url('./type/psychic.png');"
            case "rock":
                return "url('./type/rock.png');"
            case "ghost":
                return "url('./type/ghost.png');"
            case "ice":
                return "url('./type/ice.png');"
            case "dark":
                return "url('./type/dark.png');"
            case "flying":
                return "url('./type/flying.png');"
            case "steel":
                return "url('./type/steel.png');"

            default:
                break;
        }
    }};
    p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #FFFFFF;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
`

export const PokemonDetails = styled.a`
    width: 74px;
    height: 24px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const PokemonImage = styled.img`
    position: absolute;
    transform: translate(35%, -178%);
    scale: 0.42;

`
export const CaptureButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 19px 50px;
    width: 146px;
    height: 38px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border-style: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    transform: translate(175%, 0%);
    /* right: 300px;
    top: 55px; */
    
    :hover {
        cursor: pointer;
    }
`
