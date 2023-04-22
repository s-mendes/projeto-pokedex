import { useEffect } from 'react'
import { Container, Message } from './styles'

function Catch ({ catchPokemon, setCatchPokemon }) {

    useEffect ( () => {
        document.body.style.overflowY = catchPokemon ? 'hidden' : 'auto'
    }, [catchPokemon])

    

    return (
        <Container onClick={() => setCatchPokemon(false)} isVisible={catchPokemon}>
            <Message>
                <h1>Gotcha!</h1>
                <p>O Pokemon foi adicionado a sua Pokedex</p>
            </Message>
        </Container>
    )
}

export default Catch