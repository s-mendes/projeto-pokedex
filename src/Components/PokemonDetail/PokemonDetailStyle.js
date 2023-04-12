import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #5E5E5E;
    background-image: url('/pngwing1.png');
    background-repeat: no-repeat;
    background-position: center ;
    padding-bottom: 4rem;
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
    border-radius: 38px;
    margin: 0 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: url('/pngwing2.png');
    background-repeat: no-repeat;
    background-position: right top;
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
`

export const ImgsContainer = styled.div`
    div {
        width: 282px;
        height: 282px;
        background: #FFFFFF;
        border: 2px solid #FFFFFF;
        border-radius: 8px;
        margin: 26px 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            scale: 2;
        }
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

export const PokemonId = styled.h3`

`

export const PokemonName = styled.h2`

`

export const PokemonTypes = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
`

export const Type = styled.span`
   padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
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
                return "url('/type/grass.png');"
            case "fire":
                return "url('/type/fire.png');"
            case "water":
                return "url('/type/water.png');"
            case "bug":
                return "url('/type/bug.png');"
            case "normal":
                return "url('/type/normal.png');"
            case "dragon":
                return "url('/type/dragon.png');"
            case "electric":
                return "url('/type/electric.png');"
            case "poison":
                return "url('/type/poison.png');"
            case "ground":
                return "url('/type/ground.png');"
            case "fairy":
                return "url('/type/fairy.png');"
            case "fighting":
                return "url('/type/fighting.png');"
            case "psychic":
                return "url('/type/psychic.png');"
            case "rock":
                return "url('/type/rock.png');"
            case "ghost":
                return "url('/type/ghost.png');"
            case "ice":
                return "url('/type/ice.png');"
            case "dark":
                return "url('/type/dark.png');"
            case "flying":
                return "url('/type/flying.png');"
            case "steel":
                return "url('/type/steel.png');"

            default:
                break;
        }
    }};
    
`

export const Infos = styled.div`

`

export const Moves = styled.div`
    background: #FFFFFF;
    width: 292px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    span {
        padding: 0.5rem 0.5rem;
        margin: 10px 20px;
        background: #ECECEC;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        display: inline-flex;
    }
    h2 {
        margin: 20px 20px 10px 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 29px;
        color: #000000
    }
`

export const PokemonImage = styled.img`
    height: 100%;
    transform: translate(10%, -82%);
    scale: 0.60;
`