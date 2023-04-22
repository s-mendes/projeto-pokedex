import { useEffect } from 'react'
import { Container, Message } from './styles'

function Delete ({ deletePokemon, setDeletePokemon }) {

    useEffect ( () => {
        document.body.style.overflowY = deletePokemon ? 'hidden' : 'auto'
    }, [deletePokemon])

    

    return (
        <Container onClick={() => setDeletePokemon(false)} isVisible={deletePokemon}>
            <Message>
                <h1>Oh, no!</h1>
                <p>O Pokemon foi removido da sua Pokedex</p>
            </Message>
        </Container>
    )
}

export default Delete