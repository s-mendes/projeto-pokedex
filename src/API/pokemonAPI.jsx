import axios from "axios"

export const getPokemons = async (limit = 151, offset = 0) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error)
    }
}
