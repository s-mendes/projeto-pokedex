import { CardContainer, ImgsContainer, StatusContainer, PokemonInfoContainer, Infos, Moves, PokemonImage, Card } from './PokemonDetailStyle'

function PokemonDetail(props) {
    const { pokemonName } = props;

    return (
        <CardContainer>
            <h1>Detalhes</h1>
            <Card>
                <ImgsContainer>
                    <div>

                    </div>
                    <div>

                    </div>
                </ImgsContainer>
                <StatusContainer>

                </StatusContainer>
                <PokemonInfoContainer>
                    <Infos>
                        {pokemonName}
                    </Infos>
                    <Moves>

                    </Moves>
                </PokemonInfoContainer>
                <PokemonImage />
            </Card>
        </CardContainer>
    )
}

export default PokemonDetail;