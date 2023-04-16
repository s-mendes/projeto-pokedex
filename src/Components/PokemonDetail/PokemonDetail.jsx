import { CardContainer, ImgsContainer, StatusContainer, PokemonInfoContainer, Infos, Moves, PokemonImage, Card, PokemonId, PokemonName, PokemonTypes, Type, StatsBar } from './PokemonDetailStyle'
import useUpperCase from '../../hooks/useUpperCase'
import { useState } from 'react';

function PokemonDetail(props) {
    const { pokemonName, pokemons, loading } = props;

    function statPlus(pokemon) {
        let soma = 0;
        pokemon.data.stats.map((stat) => soma += stat.base_stat)
        return soma
    }

    function percentCalc(stats, position) {
        const [maxStat, setMaxStat] = useState([])
        stats.map((stat) => {
            if (stat.base_stat > maxStat) {
                setMaxStat(stat.base_stat)
            }
        })
        const percent = stats[position].base_stat / maxStat * 100
        return percent;
    }

    function renderPokemon() {
        const pokemon = pokemons.filter((pokemon) => pokemon.data.name === pokemonName)
        return (
            <Card typeBg={pokemon[0].data.types[0].type.name}>
                <ImgsContainer >
                    <div>
                        <img src={pokemon[0].data.sprites.front_default} />
                    </div>
                    <div>
                        <img src={pokemon[0].data.sprites.back_default} />
                    </div>
                </ImgsContainer>
                <StatusContainer >
                    <h2>Base Status</h2>
                    <hr />
                    <div><span>HP</span><span>{pokemon[0].data.stats[0].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 0)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Attack</span><span>{pokemon[0].data.stats[1].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 1)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Defense</span><span>{pokemon[0].data.stats[2].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 2)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Sp.Atk</span><span>{pokemon[0].data.stats[3].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 3)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Sp.Def</span><span>{pokemon[0].data.stats[4].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 4)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Speed</span><span>{pokemon[0].data.stats[5].base_stat}</span><StatsBar percent={percentCalc(pokemon[0].data.stats, 5)}><div></div></StatsBar></div>
                    <hr />
                    <div><span>Total</span><span className="total">{statPlus(pokemon[0])}</span></div>
                </StatusContainer>
                <PokemonInfoContainer>
                    <Infos>
                        <PokemonId>#{pokemon[0].data.id}</PokemonId>
                        <PokemonName>{useUpperCase(pokemonName)}</PokemonName>
                        <PokemonTypes>
                            {pokemon[0].data.types.map((type) => {
                                return (
                                    <Type key={pokemon[0].data.id + type.type.name} typeName={type.type.name}>{useUpperCase(type.type.name)} </Type>
                                )
                            })}
                        </PokemonTypes>
                    </Infos>
                    <Moves>
                        <h2>Moves:</h2>
                        <span>{useUpperCase(pokemon[0].data.moves[0].move.name)}</span>
                        <span>{useUpperCase(pokemon[0].data.moves[1].move.name)}</span>
                        <span>{useUpperCase(pokemon[0].data.moves[2].move.name)}</span>
                        <span>{useUpperCase(pokemon[0].data.moves[3].move.name)}</span>
                    </Moves>
                </PokemonInfoContainer>
                <PokemonImage src={pokemon[0].data.sprites.other["official-artwork"].front_default} />
            </Card>
        )
    }


    return (
        <CardContainer>
            <h1>Detalhes</h1>
            {loading && <p>carregando...</p>}
            {!loading && renderPokemon()}

        </CardContainer>
    )
}

export default PokemonDetail;